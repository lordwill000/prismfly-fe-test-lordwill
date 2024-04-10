import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'

import { DATA } from './data'

window.jQuery = window.$ = $
export class ImageTextSection extends HTMLElement {
  constructor () {
    super()

    if (DATA.length) {
      this.renderHTML()
      this.initSlick()
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
      <div class="image-text__content-wrapper">
        <div class="image-text__content-inner">
          ${preTitle ? `<div class="h3 image-text__pre-title">${preTitle}</div>` : ''}

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
        <div>
          <div class="image-text image-text--content-${item.textPosition}">
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
        </div>
      `
    }).join('')

    this.innerHTML = html
  }

  initSlick () {
    let isSlickInitialized = false

    const matchMediaQuery = window.matchMedia('(max-width: 1023px)')

    const handleViewportChange = (mediaQuery) => {
      if (mediaQuery.matches) {
        if (!isSlickInitialized) {
          $(this).slick({
            arrows: false,
            adaptiveHeight: true,
            dots: true
          })
          isSlickInitialized = true
        }
      } else {
        if (isSlickInitialized) {
          $(this).slick('unslick')
          isSlickInitialized = false
        }
      }
    }

    handleViewportChange(matchMediaQuery)

    matchMediaQuery.addListener(handleViewportChange)
  }
}
