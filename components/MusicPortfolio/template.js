//import html from 'utils/templating'
const music = [
  {
    title: 'Original Music',
    songs: [
      {
        link: 'https://soundcloud.com/long-dao/world-of-zen',
        linkTitle: 'World of Zen',
        soundcloud:
          'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/634909659&color=1373aa&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true&show_teaser=false'
      },
      {
        link: 'https://soundcloud.com/long-dao/space-is-cool-in-f-major',
        linkTitle: 'Space is Cool',
        soundcloud:
          'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322044999&color=1373aa&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true&show_teaser=false'
      }
    ]
  },
  {
    title: 'Indie Rock - Mike and Long Music (MLM) - All We Have (2013)',
    images: [
      './assets/img/mlm1.png',
      './assets/img/mlm2.png',
      './assets/img/incompletebooth.jpg'
    ],
    descriptions: [`Debut song from the Album "All We Have"`],
    songs: [
      {
        link: 'https://soundcloud.com/long-dao/obstacles',
        linkTitle: 'Obstacles',
        soundcloud:
          'https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90655765&amp;color=1373aa&amp;auto_play=false&amp;show_artwork=false&visual=true&show_teaser=false'
      }
    ]
  },
  {
    title: 'Original Game Soundtrack - Saturated Dreamers (2013)',
    images: [
      './assets/img/sd1.png',
      './assets/img/sd2.png',
      './assets/img/sd3.png',
      './assets/img/sd4.png'
    ],
    descriptions: [
      `
        Saturated Dreamers is an open-world adventure game set on Lake, a
        sentient ice planet that holds many secrets from expeditionists Mercedes
        and co. Players assume control of the Leda, a ship equipped with unique
        gadgets that can be used to solve puzzles, befriend creatures, and
        purify Lake's waters.
      `,
      `Saturated Dreamers features over 2 hours of ethnic-style music and
          was one of the most anticipated Indie adventure games of 2013!`
    ],
    songs: [
      {
        link: 'https://soundcloud.com/long-dao/vida-isla',
        linkTitle: 'Vida Isla - Exploration Theme',
        soundcloud:
          'https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90697034&amp;color=1373aa&amp;auto_play=false&amp;show_artwork=true&visual=true&show_teaser=false'
      },
      {
        link: 'https://soundcloud.com/long-dao/surface-of-monkeys',
        linkTitle: 'Surface of Monkeys - Chaos Theme',
        soundcloud:
          'https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F90831028&amp;color=1373aa&amp;auto_play=false&amp;show_artwork=true&visual=true&show_teaser=false'
      }
    ]
  },
  {
    title: 'Original Game Soundtrack - Immortal Defense (2007)',
    images: [
      './assets/img/id1.gif',
      './assets/img/id2.jpg',
      './assets/img/id3.jpg',
      './assets/img/id4.jpg'
    ],
    descriptions: [
      `
        Immortal Defense is a story-driven strategy-based game in which you give
        up life to traverse pathspace and defend your home world from
        destruction. Immortal Defense was acclaimed 2007 Strategy Game of the
        Year by <a href="gametunnel.com">GameTunnel.com</a>, and praised by many
        others for its storytelling and unique twist on the strategy genre.
        Immortal Defense's OST is the most downloaded album on
        <a href="https://www.iimusic.net/plus/2008/11/immortal-defense"
          >iimusic.net </a
        >. Adventure into outer space and beyond with this orchestral soundtrack
        with rhythmic percussion.
      `
    ],
    songs: [
      {
        link: 'https://soundcloud.com/long-dao/deep-space',
        linkTitle: 'Deep Space',
        soundcloud:
          'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/91172365&color=1373aa&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true'
      },
      {
        link: 'https://soundcloud.com/long-dao/a-winter-journey',
        linkTitle: 'A Winter Journey',
        soundcloud:
          'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/90696725&color=1373aa&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true'
      }
    ]
  }
]

function html(templateObject, ...substs) {
  // Use raw template strings: we don’t want
  // backslashes (\n etc.) to be interpreted
  const raw = templateObject.raw

  let result = ''

  substs.forEach((subst, i) => {
    // Retrieve the template string preceding
    // the current substitution
    let lit = raw[i]

    // In the example, map() returns an Array:
    // If `subst` is an Array (and not a string),
    // we turn it into a string
    if (Array.isArray(subst)) {
      subst = subst.join('')
    }

    // If the substitution is preceded by an exclamation
    // mark, we escape special characters in it
    if (lit.endsWith('!')) {
      subst = htmlEscape(subst)
      lit = lit.slice(0, -1)
    }
    result += lit
    result += subst
  })
  // Take care of last template string
  result += raw[raw.length - 1] // (A)

  return result
}

// export default html

class MusicList extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    const template = music.map((section, sectionIndex) => {
      const { title, images = [], descriptions = [], songs = [] } = section

      return html`
        <li>
          <h2>${title}</h2>
          <div class="image-container">
            ${images.map(
              image => html`
                <div class="image-wrap">
                  <img src="${image}" alt="Artwork" />
                </div>
              `
            )}
          </div>
        </li>
        <li>
          ${descriptions.map(
            description =>
              html`
                <p>${description}</p>
              `
          )}
        </li>
        ${songs.map(
          (song, songIndex) => html`
            <li>
              Song Title:
              <a href="${song.link}">${song.linkTitle}</a>
              <iframe
                class="soundcloud"
                width="100%"
                height="166"
                scrolling="no"
                frameborder="no"
                src="${song.soundcloud}"
                title="${song.linkTitle}"
              ></iframe>
              ${songIndex === songs.length - 1 &&
              sectionIndex !== music.length - 1
                ? html`
                    <hr />
                  `
                : ''}
            </li>
          `
        )}
      `
      // const instance = document.importNode(fragment.content, true)

      // const titleNode = instance.querySelector('.music-header')
      // const imageWrapNode = instance.querySelector('.image-wrap')
      // const descriptionsNode = instance.querySelector('.description')
      // const songNode = instance.querySelector('.song')

      // titleNode.innerHTML = title

      // images.map(image => {
      //   const el = new Image()
      //   el.src = image
      //   imageWrapNode.appendChild(el)
      // })

      // descriptions.map(description => {
      //   const el = document.createElement('p')
      //   el.textContent = description
      //   descriptionsNode.appendChild(el)
      // })

      // songs.map((song, songIndex) => {
      //   const el = songIndex ? songNode.cloneNode(true) : songNode
      //   const anchorNode = el.querySelector('a')
      //   const soundcloudNode = el.querySelector('iframe')

      //   anchorNode.href = song.link
      //   anchorNode.innerHTML = song.linkTitle
      //   anchorNode.target = '_blank'

      //   soundcloudNode.src = song.soundcloud

      //   if (songIndex === songs.length - 1 && sectionIndex !== music.length - 1) {
      //     // don't create HR on very last song
      //     el.appendChild(document.createElement('HR'))
      //   }

      //   songIndex && instance.appendChild(el) // clone element if not the first
      // })
      // musicList.appendChild(instance)
    })

    shadow.innerHTML = html`
      <ul class="grid">
        ${template}
      </ul>
    `

    const style = document.createElement('style')
    style.textContent = `
    a,
a:visited {
  text-decoration: none;
  outline: none;
  color: #0072ff;
}
a:hover,
a:visited:hover {
  color: #c4ffb2;
  text-shadow: 0px 0px 5px #315218;
}

ul {
  font-size: 13px;
  margin: 6px 0px;
  padding: 0px;
  list-style: none;
}
ul li {
  position: relative;
}
.grid {
  max-width: 69em;
  list-style: none;
}

.grid li {
  display: block;
  float: left;
  padding: 7px;
  width: 100%;
  text-align: center;
}
    .container {
  font: 14px/1.3 lato, lato, 'segoe ui', Arial, sans-serif;
  text-shadow: 1px 1px 5px #d0d0d0;
   min-height: 100px;
  overflow: hidden;
  margin-top: 1.5em;
  padding-left: 3em;
  padding-right: 3em;
  color: #000;
}
    .container song_listing {
  margin-top: 20px;
  margin-bottom: 200px;
}
.container h2 {
  text-align: center;
  letter-spacing: 1.3px;
  font-size: 22px;
  text-shadow: 0px 3px 0px rgba(0, 0, 0, 0.2);
}
.container h3,
.container p {
  font-size: 16px;
  color: #3b5677;
  text-shadow: 1px 0 5px #eeeeee;
}
.container p {
  margin: 0.6em 0 0.6em 0.6em;
}
.image-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  flex-basis: row;
}
.image-wrap {
  display: flex;
  flex: 1;
  margin: 20px 2px;
  position: relative;
  max-width: 100%;
  vertical-align: bottom;
}

/* image-wrap:after pseudo element (overlaying container) */
.image-wrap:after {
  content: ' ';
  width: 100%;
  height: 100%;
  position: absolute;
  top: -1px;
  left: -1px;
  border: solid 1px #1b1b1b;
  -wekbit-box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.image-wrap {
  text-align: center;
}

.image-wrap img {
    object-fit: cover;
  height: 140px;
  width: 100%;
  text-align: center;
  vertical-align: bottom;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}

.image-wrap:after {
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 4px 5px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(0, 0, 0, 0.6);
}

hr {
  border: 0;
  height: 1px;
  background-image: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0)
  );
  background-image: -moz-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0)
  );
  background-image: -ms-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0)
  );
  background-image: -o-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0)
  );
  padding: 0;
  border: none;
  color: #d2d2d2;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
}
hr:after {
  content: '';
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1em;
  padding: 0 0.25em;
}

.soundcloud {
  border-radius: 4px;
  display: block;
  width: 80%;
  margin: 10px auto;
  height: 95px;
  border: 1px solid black;
  box-shadow: 0 3px 8px #121212;
}

@media screen and (max-width: 850px) {
  .grid li {
    padding: 0;
  }
  .soundcloud {
    width: 100%;
  }
}
    `

    shadow.appendChild(style)
  }
}

customElements.define('music-list', MusicList)

// return html`
//   <li>
//     <h2>!${title}</h2>
//   </li>
// `
