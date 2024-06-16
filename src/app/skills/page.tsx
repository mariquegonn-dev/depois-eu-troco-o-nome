import { Metadata } from "next"
import { SkillsComponent } from "../../components/base/SkillsComponent/skills-component"

export const metadata: Metadata = {
  title: "Habilidades - MariqueGonn's Portfolio",
}

export default function SkillsPage() {
  return <SkillsComponent variant="page" />
}
