import { Metadata } from "next"
import { RepositoriesComponent } from "../../components/base/RepositoriesComponent/repositories-component"

export const metadata: Metadata = {
  title: "Repositórios - MariqueGonn's Portfolio",
}

export default function Repositories() {
  return <RepositoriesComponent />
}
