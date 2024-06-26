import { Github, Linkedin } from 'lucide-react';
import { Button } from "~/components/ui/button"
import { Link } from '@remix-run/react'


export const Footer = () => {
  return <footer className="sticky top-[100vh] w-full">
    <div className="flex container min-h-20 justify-around">

      <div className="flex items-center w-1/3">© 2024 Ryota Ikezawa</div>
      <div className="flex items-center justify-end gap-2 w-2/3">
        <Button size="icon" variant="ghost" asChild>
          <Link to='https://github.com/paveg/' target="_blank" rel="noreferrer">
            <Github />
          </Link>
        </Button>
        <Button size="icon" variant="ghost" asChild>
          <Link to='https://www.linkedin.com/in/xpav/' target="_blank" rel="noreferrer">
            <Linkedin />
          </Link>
        </Button>
      </div>
    </div>
  </footer>
}
