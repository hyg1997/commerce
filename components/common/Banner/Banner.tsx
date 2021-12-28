import cn from 'classnames'
import s from './Banner.module.css'

interface BannerProps {
  className?: string
}

const Banner: React.FC<BannerProps> = ({ className }) => {
  const rootClassName = cn(s.root, className)
  return (
    <div className={rootClassName}>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11427705-3dd3-423a-a8ca-1968b97f1101/d6d4a5k-f4c9b43b-b2fe-4b59-bdc3-ba974fff6c3b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExNDI3NzA1LTNkZDMtNDIzYS1hOGNhLTE5NjhiOTdmMTEwMVwvZDZkNGE1ay1mNGM5YjQzYi1iMmZlLTRiNTktYmRjMy1iYTk3NGZmZjZjM2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pHbSmJIuVrJheeVadShSncEOsTbAvbr9zr12zamcZb0"
        alt="banner"
      />
    </div>
  )
}

export default Banner
