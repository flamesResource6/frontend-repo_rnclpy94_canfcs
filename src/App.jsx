import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionGrid from './components/SectionGrid'
import Contact from './components/Contact'

const placeholder = (color) => `https://picsum.photos/seed/${color}/1200/800`

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />

      <main className="relative">
        <SectionGrid
          id="videos"
          title="Videos"
          subtitle="Narrative and commercial stories captured with cinematic intent."
          items={[
            { title: 'Neon City Night Drive', tag: 'Short Film', thumb: placeholder('neon') },
            { title: 'Studio Session', tag: 'Music Video', thumb: placeholder('studio') },
            { title: 'Outdoor Campaign', tag: 'Ad', thumb: placeholder('outdoor') },
            { title: 'Portrait Series', tag: 'Editorial', thumb: placeholder('portrait') },
            { title: 'Runway Cut', tag: 'Fashion', thumb: placeholder('runway') },
            { title: 'Sunset Sequence', tag: 'Travel', thumb: placeholder('sunset') },
          ]}
        />

        <SectionGrid
          id="animations"
          title="Animations"
          subtitle="Playful motion design and character-driven sequences."
          items={[
            { title: 'Orbiting Shapes', tag: '2D Motion', thumb: placeholder('orbit') },
            { title: 'Logo Morph', tag: 'Brand Motion', thumb: placeholder('logo') },
            { title: 'Explainer Loop', tag: 'Explainer', thumb: placeholder('loop') },
            { title: 'Liquid Transition', tag: 'FX', thumb: placeholder('liquid') },
            { title: 'Character Walk', tag: 'Character', thumb: placeholder('walk') },
            { title: 'HUD Interface', tag: 'UI Motion', thumb: placeholder('hud') },
          ]}
        />

        <SectionGrid
          id="graphic-design"
          title="Graphic Design"
          subtitle="Bold posters, layouts, and visual identities."
          items={[
            { title: 'Festival Poster', tag: 'Poster', thumb: placeholder('poster') },
            { title: 'Minimal Layout', tag: 'Editorial', thumb: placeholder('layout') },
            { title: 'Color Systems', tag: 'Style Guide', thumb: placeholder('color') },
            { title: 'Typeface Study', tag: 'Typography', thumb: placeholder('type') },
            { title: 'Grid Play', tag: 'Grid', thumb: placeholder('grid') },
            { title: 'Texture Pack', tag: 'Assets', thumb: placeholder('texture') },
          ]}
        />

        <SectionGrid
          id="commercials"
          title="Commercials"
          subtitle="Product launches and brand moments that convert."
          items={[
            { title: 'Launch Spot', tag: 'TV', thumb: placeholder('tv') },
            { title: 'Product Teaser', tag: 'Social', thumb: placeholder('teaser') },
            { title: 'Holiday Edit', tag: 'Campaign', thumb: placeholder('holiday') },
            { title: 'On-Location', tag: 'BTS', thumb: placeholder('bts') },
            { title: 'Retail Screen', tag: 'OOH', thumb: placeholder('ooh') },
            { title: 'Web Sequence', tag: 'Web', thumb: placeholder('web') },
          ]}
        />

        <SectionGrid
          id="branding"
          title="Branding"
          subtitle="Visual identities and systems for modern companies."
          items={[
            { title: 'Orb Labs', tag: 'Identity', thumb: placeholder('orb') },
            { title: 'Café Koko', tag: 'Packaging', thumb: placeholder('cafe') },
            { title: 'Atlas Run', tag: 'Rebrand', thumb: placeholder('atlas') },
            { title: 'Moss & Co', tag: 'Logo', thumb: placeholder('moss') },
            { title: 'Vista UI', tag: 'Design System', thumb: placeholder('vista') },
            { title: 'Peak Wear', tag: 'Apparel', thumb: placeholder('peak') },
          ]}
        />

        <Contact />

        <footer className="py-10 text-center text-white/50">
          © {new Date().getFullYear()} Creator Lab. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
