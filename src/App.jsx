import { Profile } from "./components/Profile";
import "./index.css"

export default function App () {
  return (
    <div className="app">
      <Profile 
        name="Clarc Vasconcelos"
        bio="Full-stack Javascript developer"
        email="clarc.p.vasconcelos@gmail.com"
        phone="Você pode me achar abaixo"
        githubUrl="https://github.com/Clarc-Vasconcelos"
        linkedinUrl="https://www.linkedin.com/in/clarc-vasconcelos-47535b116/"
      
      />
    </div>
  )
}