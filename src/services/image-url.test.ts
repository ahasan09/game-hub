import { describe, it, expect } from 'vitest'
import getCroppedImageUrl from './image-url'

describe('getCroppedImageUrl', () => {
  it('returns the no-image placeholder when url is empty', () => {
    const result = getCroppedImageUrl('')
    expect(result).toContain('no-image-placeholder')
  })

  it('inserts the crop segment after the media/ path', () => {
    const url = 'https://media.rawg.io/media/games/abc.jpg'
    const result = getCroppedImageUrl(url)
    expect(result).toBe('https://media.rawg.io/media/crop/600/400/games/abc.jpg')
  })
})
