import { BasisTextureLoader } from 'three/examples/jsm/loaders/BasisTextureLoader'
import { useThree, useLoader } from 'react-three-fiber'
import { CompressedTexture, sRGBEncoding, LinearFilter } from 'three'
import { useMemo } from 'react'

const useTexture = ({ path }: { path: string }): CompressedTexture => {
  const { gl } = useThree()

  gl.outputEncoding = sRGBEncoding
  const texture = useLoader(BasisTextureLoader, path, (loader: BasisTextureLoader) => {
    loader.setTranscoderPath('/basis/')
    loader.detectSupport(gl)

    return loader
  })

  const t = useMemo(() => {
    texture.encoding = sRGBEncoding

    texture.minFilter = LinearFilter

    return texture
  }, [texture])

  return t
}

export default useTexture
