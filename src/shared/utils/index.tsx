import Image from "next/image"
import Link from "next/link"

export const mapTableData = (data: { [_key: string]: string }[], keys: string[], clickAble?: string) => {
  return data.map((item) => {
    return keys.map((_key) => {
      if (_key === 'image') {
        const image = JSON.parse(item[_key])            
        return image && <div style={{ width: '125px' }}>
          <Image alt={image.caption.plainText} src={image.url} width={image.width} height={image.height}/>
        </div>
      }
      if (_key === clickAble) {
        return <Link href={`/${item.id}`}>{item[_key]}</Link>
      }
      return item[_key]
    })
  })
}