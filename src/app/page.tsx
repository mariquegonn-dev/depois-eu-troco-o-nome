import { Section } from "@/components/base/Main/main"
import { SideBar } from "@/components/base/Sidebar/sidebar"
import { AboutMe } from "./(components)/about-me"
import { SkillsComponent } from "../components/base/SkillsComponent/skills-component"
import { RepositoriesComponent } from "../components/base/RepositoriesComponent/repositories-component"

export default function Home() {
  return (
    <>
      <div className="md:hidden block">
        <SideBar />
      </div>
      <Section variant="home">
        <AboutMe />
        <RepositoriesComponent variant="home" />
        <SkillsComponent variant="home" />
      </Section>
    </>
  )
}
