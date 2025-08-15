"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Copy, Image as ImageIcon, Type, Sparkles, Zap, Loader2, Download, X } from "lucide-react"
import { useState, useRef } from "react"
import Image from "next/image"

interface GenerationResult {
  id: string
  imageUrl: string
  prompt: string
  createdAt: string
}

export function GeneratorSection() {
  const [selectedMode, setSelectedMode] = useState("image-to-image")
  const [prompt, setPrompt] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [uploadedFileName, setUploadedFileName] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [generationResult, setGenerationResult] = useState<GenerationResult | null>(null)
  const [error, setError] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle file upload
  const handleFileUpload = async (file: File) => {
    try {
      setError("")
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setUploadedImage(data.dataUrl)
        setUploadedFileName(data.fileName)
      } else {
        setError(data.error || 'Failed to upload image')
      }
    } catch (error) {
      setError('Failed to upload image')
      console.error('Upload error:', error)
    }
  }

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
  }

  // Handle drag and drop
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      handleFileUpload(file)
    }
  }

  // Handle generation
  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt")
      return
    }

    if (selectedMode === "image-to-image" && !uploadedImage) {
      setError("Please upload an image for image-to-image generation")
      return
    }

    setIsLoading(true)
    setError("")
    setGenerationResult(null)

    try {
      const endpoint = selectedMode === "text-to-image" ? "/api/text-to-image" : "/api/image-to-image"
      const body = selectedMode === "text-to-image" 
        ? { prompt, aspectRatio: "1:1", outputFormat: "webp" }
        : { prompt, inputImage: uploadedImage, aspectRatio: "match_input_image", outputFormat: "jpg" }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      const data = await response.json()

      if (data.success && data.data.output) {
        const imageUrl = Array.isArray(data.data.output) ? data.data.output[0] : data.data.output
        setGenerationResult({
          id: data.data.id,
          imageUrl: imageUrl,
          prompt: prompt,
          createdAt: data.data.completed_at || new Date().toISOString()
        })
      } else {
        setError(data.error || 'Failed to generate image')
      }
    } catch (error) {
      setError('Failed to generate image. Please try again.')
      console.error('Generation error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Clear uploaded image
  const clearUploadedImage = () => {
    setUploadedImage(null)
    setUploadedFileName("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Download generated image
  const downloadImage = () => {
    if (generationResult?.imageUrl) {
      const link = document.createElement('a')
      link.href = generationResult.imageUrl
      link.download = `nano-banana-${generationResult.id}.${selectedMode === 'text-to-image' ? 'webp' : 'jpg'}`
      link.click()
    }
  }

  return (
    <section id="generator" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Started</h2>
          <p className="text-xl text-secondary mb-2">Try The AI Editor</p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Experience the power of nano-banana&apos;s natural language image editing. Transform any photo with simple text commands
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Generator Interface */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-firecrawl-gradient rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Prompt Engine</h3>
                  <p className="text-sm text-muted-foreground">Transform your image with AI-powered editing</p>
                </div>
              </div>

              {/* Mode Selection */}
              <div className="flex space-x-2 mb-6">
                <Button
                  variant={selectedMode === "image-to-image" ? "default" : "outline"}
                  onClick={() => setSelectedMode("image-to-image")}
                  className="flex-1"
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Image to Image
                </Button>
                <Button
                  variant={selectedMode === "text-to-image" ? "default" : "outline"}
                  onClick={() => setSelectedMode("text-to-image")}
                  className="flex-1"
                >
                  <Type className="w-4 h-4 mr-2" />
                  Text to Image
                </Button>
              </div>

              {/* Upload Area - Only show for image-to-image mode */}
              {selectedMode === "image-to-image" && (
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Upload className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Reference Image</span>
                  </div>
                  
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  
                  {uploadedImage ? (
                    <div className="relative border-2 border-border rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <Image 
                          src={uploadedImage} 
                          alt="Uploaded" 
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded-lg"
                          unoptimized
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{uploadedFileName}</p>
                          <p className="text-xs text-muted-foreground">Ready for generation</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={clearUploadedImage}
                          className="absolute top-2 right-2"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-muted-foreground transition-colors cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                    >
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-foreground mb-1">Drop an image here or click to upload</p>
                      <p className="text-sm text-muted-foreground">JPEG, PNG, or WebP • Max 5MB</p>
                    </div>
                  )}
                </div>
              )}

              {/* Error Display */}
              {error && (
                <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              {/* Prompt Input */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Type className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">
                    {selectedMode === "image-to-image" ? "Edit Prompt" : "Generation Prompt"}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={
                      selectedMode === "image-to-image" 
                        ? "Describe how you want to edit the image..." 
                        : "Describe the image you want to generate..."
                    }
                    className="flex-1 min-h-20 resize-none"
                    rows={3}
                    disabled={isLoading}
                  />
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="self-start"
                    onClick={() => navigator.clipboard.writeText(prompt)}
                    disabled={!prompt || isLoading}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Generate Button */}
              <Button 
                className="w-full bg-primary hover:bg-primary/90" 
                onClick={handleGenerate}
                disabled={isLoading || !prompt.trim() || (selectedMode === "image-to-image" && !uploadedImage)}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Now
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Gallery */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Output Gallery</h3>
                    <p className="text-sm text-muted-foreground">Your ultra-fast AI creations appear here instantly</p>
                  </div>
                </div>
                {generationResult && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadImage}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                )}
              </div>

              {/* Content */}
              <div className="aspect-square bg-muted rounded-lg flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                {isLoading ? (
                  <>
                    <Loader2 className="w-8 h-8 text-muted-foreground animate-spin mb-4" />
                    <p className="text-foreground mb-2">Generating your image...</p>
                    <p className="text-sm text-muted-foreground">This may take a few seconds</p>
                  </>
                ) : generationResult ? (
                  <>
                    <Image 
                      src={generationResult.imageUrl} 
                      alt={`Generated: ${generationResult.prompt}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain rounded-lg"
                      unoptimized
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm rounded p-2">
                      <p className="text-white text-xs truncate">{generationResult.prompt}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-muted-foreground/20 rounded-lg flex items-center justify-center mb-4">
                      <Sparkles className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-foreground mb-2">Ready for instant generation</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedMode === "image-to-image" 
                        ? "Upload an image and enter your prompt to get started" 
                        : "Enter your prompt to generate an amazing image"
                      }
                    </p>
                  </>
                )}
              </div>

              {/* Generation Info */}
              {generationResult && (
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>ID: {generationResult.id}</span>
                    <span>{new Date(generationResult.createdAt).toLocaleTimeString()}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 