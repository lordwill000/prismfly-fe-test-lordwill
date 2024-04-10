const DATA = [
  {
    id: 1,
    preTitle: 'Spain',
    title: 'Discover Spain: tapestry of culture',
    content: 'Embark on a journey through Spain with our expertly curated tours. Explore iconic landmarks, savor authentic cuisine, and immerse yourself in the rich tapestry of Spanish culture. Let us guide you through an adventure where every moment is filled with discovery and delight.',
    ctaURL: 'https://google.com',
    image: 'spain.jpg',
    textPosition: 'right'
  },
  {
    id: 2,
    preTitle: 'Egypt',
    title: 'An odyssey through ancient wonders',
    content: 'From the iconic pyramids of Giza to the serene banks of the Nile, our itineraries promise an immersive experience into the heart of ancient civilization. Explore captivating temples, cruise along the timeless river, and delve into the mysteries of pharaonic history. Let us lead you on a remarkable adventure where every step reveals the magic of Egypt\'s past and present.',
    ctaURL: 'https://google.com',
    image: 'egypt.jpg',
    textPosition: 'left'
  },
  {
    id: 3,
    preTitle: 'Portugal',
    title: "Madeira: exploring nature's paradise",
    content: 'Embark on a captivating journey to Madeira, where lush landscapes and pristine beauty await. Our thoughtfully designed tours invite you to discover the island\'s natural wonders, from rugged coastlines to verdant forests. Immerse yourself in the charming villages, indulge in local delicacies, and breathe in the fresh ocean air as you explore this enchanting destination.',
    ctaURL: 'https://google.com',
    image: 'portugal.jpg',
    textPosition: 'right'
  }
]

export class ImageTextSection extends HTMLElement {
  constructor () {
    super()

    if (DATA.length) {
      this.renderHTML()
    }
  }

  renderImage ({ title, image, index }) {
    return `
      <div class="image-text__image">
        <img 
          alt="${title}" 
          loading="${index === 0 ? 'eager' : 'lazy'}"
          fetchpriority="${index === 0 ? 'high' : 'low'}"
          src="./assets/${image}" 
          width="1440"
          height="1280"
        >
      </div>
    `
  }

  renderTitle ({ title, index }) {
    if (index === 0) {
      return `<h1 class="h2 image-text__title">${title}</h1>`
    }

    return `<h2 class="image-text__title">${title}</h2>`
  }

  renderContent ({ preTitle, title, content, ctaURL, textPosition, index }) {
    return `
      <div class="image-text__content-wrapper image-text__content-wrapper--${textPosition}">
        <div class="image-text__content-inner">
          ${preTitle ? '<div class="h3 image-text__pre-title">Pre title</div>' : ''}

          ${title && this.renderTitle({ title, index })}

          ${content
            ? `<div class="image-text__copy">
              <p>${content}</p>
            </div>`
            : ''
          }

          ${ctaURL
            ? `
              <div class="image-text__cta">
                <a href="${ctaURL}" 
                  class="button"
                  title="Learn more"
                >
                  Learn more
                </a>
              </div>`
            : ''}
        </div>
      </div>
    `
  }

  renderHTML () {
    const html = DATA.map((item, index) => {
      const imageHTML = this.renderImage({ title: item.title, image: item.image, index })
      const contentHTML = this.renderContent({ preTitle: item.preTitle, title: item.title, content: item.content, ctaURL: item.ctaURL, textPosition: item.textPosition, index })

      return `
        <div class="image-text">
          ${item.textPosition === 'right'
          ? `
              ${imageHTML}
              ${contentHTML}
            `
          : `
              ${contentHTML}
              ${imageHTML}
            `
          }
            
        </div>
      `
    }).join('')

    this.innerHTML = html
  }
}
