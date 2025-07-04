import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Hiren Lekhadiya</h3>
            <p className="text-muted-foreground mb-4">
              A passionate full-stack developer with expertise in building scalable and maintainable web applications.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <a href="https://github.com/kalpesh-chavda" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon">
                <a href="https://www.linkedin.com/in/kalpesh-chavda/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon">
                <a href="mailto:kalpeshchavda094@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <div>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </div>
              <div>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
              </div>
              <div>
                <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </a>
              </div>
              <div>
                <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>React.js</div>
               <div>Next.js</div>
              <div>Node.js & Express.js</div>
              <div>MongoDB & MySql & PostgreSQL </div>
              <div>JavaScript & TypeScript</div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground mt-2">© 2024 Hiren Lekhadiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
