import { StyledInventoryPage } from "./style"
import {AiOutlineHome} from "react-icons/ai"
import {BsBoxSeam} from "react-icons/bs"
import {FaCashRegister} from "react-icons/fa"
import {AiOutlineUser} from "react-icons/ai"
import {MdExitToApp} from "react-icons/md"
import {BiSearchAlt2} from "react-icons/bi"
import {createTable, useTableInstance, getCoreRowModel,createDataColumn} from "@tanstack/react-table"
import TESTE from "./teste.json"
import { useState } from "react"

const table = createTable()
const defaultData = [...TESTE]
const defaultColumns = [
    table.createDataColumn("name", {
        id:"name",
        header:"Full Name"
    }),
    table.createDataColumn("email", {
        id:"email",
        header:"E-mail Adress"
    }),
    table.createDataColumn("phone", {
        id:"phone",
        header:"Phone Number"
    }),
    table.createDataColumn("standart", {
        id:"standart",
        header:"Class"
    }),
    table.createDataColumn("section", {
        id:"section",
        header:"Section"
    }),
    table.createDataColumn("age", {
        id:"age",
        header:"Age"
    }),
    table.createDataColumn("date_of_birth", {
        id:"date_of_birth",
        header:"Date of Birth"
    }),
    table.createDataColumn("date_of_admission", {
        id:"date_of_admission",
        header:"Date of Admission"
    }),
]


export const InventoryPage = () => {
    const [data, setData] = useState([...defaultData])
    const [columns, setColumns] = useState([...defaultColumns])
    
    const instance = useTableInstance(table,{
        data,
        columns,
        getCoreRowModel:getCoreRowModel()
    })

    console.log(instance)

    return  (
        <StyledInventoryPage>
            <header>
                <h1>Prime Imports LTDA</h1>
            </header>
            <aside>
                <div>
                <AiOutlineHome/>
                <BsBoxSeam/>
                <FaCashRegister/>
                <AiOutlineUser/>
                </div>
                <MdExitToApp/>
            </aside>
            <section>
                <div>
                    <h2>Estoque</h2>
                    <button>Novo Produto</button>
                    <input type="text" id="seach-product"></input>
                    <button><BiSearchAlt2/></button>
                </div>
                <div>
                  <table border={1}>
                     <thead>
                        {
                            instance.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {
                                        headerGroup.headers.map((header) => (
                                            <th key={header.id} >{header.isPlaceHolder ? null : header.renderHeader()}</th>
                                        ))
                                    }
                                </tr>
                            ))}
                     </thead>
                     <tbody>
                        {
                            instance.getRowModel().rows.map((row) => (
                                <tr key={row.id} >
                                {
                                    row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>{cell.renderCell()}</td>
                                    ))
                                }
                                </tr>
                            ))
                        }
                     </tbody>
                  </table>
                </div>
            </section>

        </StyledInventoryPage>
    )
}