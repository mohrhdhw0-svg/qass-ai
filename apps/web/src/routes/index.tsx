import { createFileRoute } from '@tanstack/react-router'

import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

export const Route = createFileRoute('/')({ component: Home })

const tools = [
  { name: 'Library', active: true },
  { name: 'Captions', active: false },
  { name: 'Effects', active: false },
  { name: 'Transitions', active: false },
  { name: 'Audio', active: false },
  { name: 'Templates', active: false },
]

const clips = [
  { label: 'Intro', duration: '00:04', color: 'bg-[#00B8DB]' },
  { label: 'B-roll', duration: '00:12', color: 'bg-sky-500' },
  { label: 'Talking Head', duration: '00:17', color: 'bg-cyan-400' },
  { label: 'Outro', duration: '00:06', color: 'bg-sky-700' },
]

const timelineTracks = [
  { name: 'Video 1', items: ['Intro', 'B-roll', 'Outro'], active: true },
  { name: 'Audio', items: ['Voiceover', 'Music'], active: false },
  { name: 'Text', items: ['Title'], active: false },
]

function Home() {
  return (
    <div className="min-h-screen bg-[#eef9ff] text-slate-900">
      <header className="border-b border-sky-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B8DB] text-lg font-bold text-white shadow-[0_10px_30px_rgba(0,184,219,0.35)]">
              Q
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight text-slate-900">Qass AI</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">studio</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {['Dashboard', 'Editor', 'Templates', 'AI Tools', 'Exports'].map((item) => (
              <button
                key={item}
                type="button"
                className={`text-sm font-medium transition ${
                  item === 'Editor' ? 'text-[#00B8DB]' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Drafts</Button>
            <Button size="sm" className="bg-[#00B8DB] text-white hover:bg-[#00a7cc]">Export</Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] p-6">
        <section className="mb-6 grid gap-4 xl:grid-cols-[240px_minmax(0,1fr)_320px]">
          <aside className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Tools</h2>
              <span className="rounded-full bg-sky-100 px-2 py-1 text-[10px] font-medium text-[#00B8DB]">Live</span>
            </div>

            <div className="space-y-2">
              {tools.map((tool) => (
                <button
                  key={tool.name}
                  type="button"
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                    tool.active
                      ? 'bg-sky-50 text-[#00B8DB] ring-1 ring-sky-200'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{tool.name}</span>
                  <span className="h-2 w-2 rounded-full bg-current opacity-70" />
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950 p-4 text-white">
              <p className="text-[10px] uppercase tracking-[0.2em] text-sky-200">AI assist</p>
              <p className="mt-3 text-lg font-semibold">Auto cut</p>
              <p className="mt-2 text-sm text-slate-300">Find the best moments, remove filler, and generate subtitles in one click.</p>
            </div>
          </aside>

          <div className="space-y-4">
            <Card className="border-sky-100 bg-white shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between gap-3 px-5 py-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Project</p>
                  <CardTitle className="mt-1 text-lg text-slate-900">Launch Reel • 30s</CardTitle>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">Auto-save</Button>
                  <Button size="sm" className="bg-[#00B8DB] text-white hover:bg-[#00a7cc]">Render</Button>
                </div>
              </CardHeader>

              <CardContent className="px-5 pb-5">
                <div className="rounded-[28px] border border-sky-100 bg-[radial-gradient(circle_at_top,#dff8ff,#ebf8ff_40%,#fbfeff_100%)] p-4">
                  <div className="flex items-center justify-between pb-4 text-xs text-slate-500">
                    <span>Preview</span>
                    <span>4K • 24fps • 30s</span>
                  </div>

                  <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-sky-100 via-white to-sky-200 shadow-inner ring-1 ring-sky-100">
                    <div className="aspect-video w-full bg-[linear-gradient(135deg,#dffaff_0%,#e7f9ff_30%,#dbeafe_100%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/75 text-4xl shadow-xl backdrop-blur-sm ring-1 ring-sky-100">
                        ▶
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm">
                      <span className="h-2 w-2 rounded-full bg-[#00B8DB]" />
                      00:12 / 00:30
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-100 bg-white shadow-sm">
              <CardHeader className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Timeline</p>
                  <CardTitle className="mt-1 text-base text-slate-900">Sequence</CardTitle>
                </div>
                <Button variant="ghost" size="sm">Snap to playhead</Button>
              </CardHeader>

              <CardContent className="space-y-3 px-5 pb-5">
                <Tabs defaultValue="timeline" className="w-full">
                  <TabsList className="mb-4 bg-sky-50 p-1">
                    <TabsTrigger value="timeline">Timeline</TabsTrigger>
                    <TabsTrigger value="transitions">Transitions</TabsTrigger>
                    <TabsTrigger value="audio">Audio</TabsTrigger>
                  </TabsList>

                  <TabsContent value="timeline" className="space-y-3">
                    {timelineTracks.map((track) => (
                      <div key={track.name} className="rounded-2xl border border-sky-100 bg-slate-50 p-2">
                        <div className="mb-2 flex items-center justify-between px-2 text-xs text-slate-500">
                          <span>{track.name}</span>
                          <span>{track.items.length} items</span>
                        </div>
                        <div className="flex gap-2 overflow-hidden rounded-xl bg-white p-2 ring-1 ring-slate-100">
                          {track.items.map((item, idx) => (
                            <div
                              key={item}
                              className={`flex min-w-[120px] items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-white ${
                                idx % 2 === 0 ? 'bg-[#00B8DB]' : 'bg-sky-600'
                              } ${track.active ? 'opacity-100' : 'opacity-70'}`}
                            >
                              <span>{item}</span>
                              <span className="text-[10px] opacity-80">00:10</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="transitions" className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm text-slate-600">
                    Fade, slide, whip-pan, zoom dissolve, and AI match cut presets are ready.
                  </TabsContent>

                  <TabsContent value="audio" className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm text-slate-600">
                    Voiceover levels, background music, and cleaning tools are all synced with the project.
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-4">
            <Card className="border-sky-100 bg-white shadow-sm">
              <CardHeader className="px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Inspector</p>
                <CardTitle className="mt-1 text-base text-slate-900">Clip settings</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 px-5 pb-5">
                <div className="rounded-2xl bg-sky-50 p-3">
                  <p className="text-xs text-slate-500">Selected clip</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">Talking Head</p>
                </div>

                <div className="space-y-2">
                  {[
                    ['Trim start', '00:00'],
                    ['Trim end', '00:03'],
                    ['Scale', '100%'],
                    ['Opacity', '92%'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm">
                      <span className="text-slate-500">{label}</span>
                      <span className="font-medium text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/80 p-3 text-center text-sm text-slate-600">
                  AI enhancements ready
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-100 bg-white shadow-sm">
              <CardHeader className="px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Quick actions</p>
                <CardTitle className="mt-1 text-base text-slate-900">Media stack</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3 px-5 pb-5">
                {clips.map((clip) => (
                  <div key={clip.label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-2">
                    <div className={`h-12 w-16 rounded-lg ${clip.color}`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{clip.label}</p>
                      <p className="text-xs text-slate-500">{clip.duration}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </section>
      </main>
    </div>
  )
}
