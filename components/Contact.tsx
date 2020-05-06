import React, { useRef, useState } from 'react'

const contactsList: {
  link: string
  icon: string
}[] = [
  {
    icon: 'telegram',
    link: 'https://t.me/talentless_guy',
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com/v1rtl',
  },
  {
    link: 'https://www.reddit.com/user/v1rtl',

    icon: 'reddit',
  },
  {
    link: 'https://github.com/talentlessguy',
    icon: 'github',
  },
  {
    link: 'https://ello.co/talentlessguy',

    icon: 'ello',
  },
  {
    link: 'https://instagram.com/v1rtlize',

    icon: 'instagram',
  },
  {
    link: 'https://dev.to/talentlessguy',
    icon: 'dev',
  },
  {
    link: 'https://codepen.io/talentless_guy',
    icon: 'codepen',
  },
  {
    link: 'https://glitch.com/@talentlessguy',
    icon: 'glitch',
  },
  {
    link: 'https://money.yandex.ru/to/410014774355272',
    icon: 'yandex_money',
  },
  {
    link: 'https://qiwi.com/n/V1RTL',
    icon: 'qiwi',
  },
  {
    link: 'https://paypal.me/v1rtl',
    icon: 'paypal',
  },
  // {
  //   link: 'https://steamcommunity.com/profiles/76561198243557488',
  //   icon: 'steam',
  // },
  // {
  //   link: 'https://soundcloud.com/talentless_guy',
  //   icon: 'soundcloud',
  // },
]

const EmailContact = ({ email }: { email: string }) => {
  const ref = useRef<HTMLInputElement>()

  const [copied, toggleCopied] = useState<boolean | 'error'>(false)

  return (
    <div
      css={{
        'button, input': {
          border: 'none',
          background: 'transparent',
          color: 'white',
          fontSize: '2em',
        },
        input: {
          fontFamily: 'monospace',
          width: '12em',
          padding: '1em 0',
        },
      }}
    >
      <input ref={ref} readOnly value={email} />
      <button
        onClick={() => {
          ref.current.focus()
          ref.current.select()
          try {
            document.execCommand('copy')
            toggleCopied(true)
          } catch (e) {
            toggleCopied('error')
          }
        }}
      >
        <img src="/icons/copy.svg" alt="copy" />
      </button>
      {copied === 'error' ? 'Failed to copy :(' : copied && 'Copied to clipboard!'}
    </div>
  )
}

const Contact = () => {
  return (
    <section
      css={{
        padding: '3rem',
      }}
      id="contact"
    >
      <h2>Links</h2>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          '@media (max-width: 500px)': {
            gridTemplateColumns: '1fr',
          },
          gap: '3rem',
        }}
      >
        <div
          css={{
            paddingTop: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gridAutoRows: 'minmax(100px, 1fr)',
            gap: '3rem',
          }}
        >
          {contactsList.map(({ icon, link }) => (
            <a
              css={{
                textDecoration: 'none',
              }}
              key={icon}
              href={link}
              title={icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure
                css={{
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <img
                  css={{
                    '&:hover': {
                      filter: 'brightness(80%)',
                    },
                  }}
                  width={45}
                  height={45}
                  src={`/icons/${icon}.svg`}
                  alt={icon}
                  loading="lazy"
                />
                <figcaption
                  css={{
                    marginTop: '0.5rem',
                    textAlign: 'center',
                  }}
                >
                  {icon}
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
        <div>
          <h3>All my accounts I have ever created</h3>
          <p>
            I am online most of the time on Telegram, Twitter and Reddit so if you need to PM me better write there.
          </p>
          <p>
            All my code is on GitHub. I don&apos; make any codepens / glitch repos but may do in the future so I will
            leave them here.
          </p>
          <p>For payment I use Yandex Money, Qiwi and Paypal.</p>
          <h3>e-mail</h3>
          <p>
            Main inbox:
            <EmailContact email="pilll.PL22@gmail.com" />
          </p>
          <p>
            Secure inbox:
            <EmailContact email="v1rtl@protonmail.com" />
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
