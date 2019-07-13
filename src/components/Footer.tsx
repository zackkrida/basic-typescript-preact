import { h } from 'preact'

interface FooterProps {
  name: string
}
export default function Footer({ name }: FooterProps) {
  return (
    <footer>
      &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
    </footer>
  )
}
