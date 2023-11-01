import { forwardRef } from "react"
import { TableComponent, TBody, THead } from "./style"

interface TableProps {
  header: string[]
  body: string[][] | React.ReactNode[][]
}

const Table = forwardRef<HTMLTableRowElement, TableProps>(({ header, body }: TableProps, ref) => {
  return(
    <TableComponent>
      {
        header.length > 0 && (
          <THead>
            <tr>
              {
                header.map((item, index) => (
                  <th key={index}>
                    {item}
                  </th>
                ))
              }
            </tr>
          </THead>
        )
      }
      <TBody>
        {
          body.map((elem, index) => (
            <tr
              key={`${index}-${elem[0]}`}
              ref={index === body.length - 1 ? ref : null}
            >
              {
                elem.map((item, idx) => (
                  <td key={idx}>{item}</td>
                ))
              }
            </tr>
          ))
        }
      </TBody>
    </TableComponent>
  )
})

export default Table