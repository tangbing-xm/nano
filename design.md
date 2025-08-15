{
  "design_system_profile": {
    "name": "Firecrawl Inspired",
    "version": "1.0.0",
    "description": "一个基于 Firecrawl.dev 网站的现代、简洁且以技术为中心的设计系统。整体风格强调清晰度、易用性和充满活力的专业感。",
    "metadata": {
      "source_url": "https://www.firecrawl.dev/",
      "analysis_date": "2025-08-15"
    }
  },
  "style_guide": {
    "overall_impression": "该设计在深色主题上营造出一种复杂而平易近人的感觉。它通过明亮的强调色和充足的留白来平衡简约的美学，创造出引人入胜的用户体验。风格非常适合以开发者为中心的产品。",
    "design_philosophy": {
      "clarity": "界面简洁，信息层次分明。",
      "modernism": "采用现代字体、渐变和微妙的动画效果。",
      "focus": "通过对比色和引导性视觉元素，将用户注意力吸引到关键操作（如 CTA 按钮）上。"
    },
    "color_palette": {
      "primary": {
        "name": "Vibrant Orange/Red",
        "hex": "#FF4400",
        "description": "充满活力的主色调，用于号召性用语（CTA）、关键链接和品牌标识。这个颜色传达出能量和自信。"
      },
      "secondary": {
        "name": "Bright Cyan/Blue",
        "hex": "#00DDFF",
        "description": "作为次要强调色，常用于图标、次要按钮或与主色调形成对比的装饰性元素。"
      },
      "background": {
        "name": "Near Black",
        "hex": "#0F0F0F",
        "description": "深邃的近黑色背景，为内容提供了极佳的对比度，营造出一种专注和高级的氛围。"
      },
      "surface": {
        "name": "Dark Gray",
        "hex": "#1A1A1A",
        "description": "用于卡片、输入框和模态框等界面元素，使其与深色背景区分开，增加界面的层次感。"
      },
      "text": {
        "primary_text": {
          "name": "Off-White",
          "hex": "#F5F5F5",
          "description": "用于正文和主要标题，确保在深色背景上的可读性。"
        },
        "secondary_text": {
          "name": "Medium Gray",
          "hex": "#A0A0A0",
          "description": "用于副标题、描述性文本和辅助信息，以创建视觉层次。"
        },
        "highlight_text": {
          "name": "Primary Orange/Red",
          "hex": "#FF4400",
          "description": "用于链接和需要特别突出的文本。"
        }
      },
      "utility": {
        "border_color": {
          "name": "Subtle Gray",
          "hex": "#333333",
          "description": "用于卡片和输入框的边框，提供微妙的结构感而不会分散注意力。"
        },
        "gradient": {
          "name": "Hero Gradient",
          "css": "linear-gradient(90deg, #FF4400, #FF7700)",
          "description": "在关键区域（如英雄部分的标题）使用，以增加视觉吸引力和品牌感。"
        }
      }
    },
    "typography": {
      "font_family": "Sans-Serif, likely Inter or a similar modern geometric font.",
      "styles": [
        {
          "role": "heading_large",
          "font_size": "clamp(2rem, 5vw, 4rem)",
          "font_weight": 700,
          "description": "用于网站主标题，通常会应用渐变色。"
        },
        {
          "role": "heading_medium",
          "font_size": "1.8rem",
          "font_weight": 600,
          "description": "用于各个部分的小节标题。"
        },
        {
          "role": "body_text",
          "font_size": "1rem",
          "font_weight": 400,
          "line_height": 1.6,
          "description": "用于段落和主要内容。"
        },
        {
          "role": "button_text",
          "font_size": "1rem",
          "font_weight": 500,
          "text_transform": "none",
          "description": "按钮和链接中的文本。"
        }
      ]
    },
    "layout_and_spacing": {
      "grid_system": "Likely a flexible grid system, possibly 12-column.",
      "spacing_unit": "8px",
      "principles": [
        "Generous whitespace to improve readability and focus.",
        "Consistent padding and margins throughout the application.",
        "Centered content for hero sections and key information."
      ],
      "container_max_width": "1200px"
    },
    "component_styles": {
      "buttons": {
        "primary_cta": {
          "background_color": "$color_palette.primary.hex",
          "text_color": "#FFFFFF",
          "border_radius": "8px",
          "padding": "12px 24px",
          "hover_effect": "Slightly brighter or subtle shadow effect."
        },
        "secondary_cta": {
          "background_color": "transparent",
          "text_color": "$color_palette.text.primary_text.hex",
          "border": "1px solid $color_palette.utility.border_color.hex",
          "border_radius": "8px",
          "padding": "12px 24px",
          "hover_effect": "Background color changes to $color_palette.surface.hex"
        }
      },
      "cards": {
        "background_color": "$color_palette.surface.hex",
        "border": "1px solid $color_palette.utility.border_color.hex",
        "border_radius": "12px",
        "padding": "24px",
        "box_shadow": "none"
      },
      "inputs": {
        "background_color": "$color_palette.surface.hex",
        "border": "1px solid $color_palette.utility.border_color.hex",
        "border_radius": "8px",
        "padding": "12px",
        "focus_effect": "Border color changes to $color_palette.primary.hex"
      }
    }
  }
}