import CherryBlossom from '@/public//cherry-blossom.svg'

export default function CherryBlossomBackground() {
  return (
    <div className="background-container">
      {[...Array(10)].map((_, index) => (
        <CherryBlossom style={{ 'color': 'var(--cherry-blossom)' }} key={index} className={`cherry-blossom blossom-${index + 1}`} />
      ))}
    </div>
  )
}

