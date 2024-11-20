import { useEffect, useState} from 'react'
import { Table } from 'antd'
const Pagetable = (props) => {

  let config = props?.config
  const alias = props.alias || []
  const [columns, setColumns] = useState([])
  const initColumns = () => {
    const newCol = []
    for (let i = 0; i < alias.length; i++) {
      let aliaConfig = alias[i]
      let keyArray = Object.keys(aliaConfig)
      let title = keyArray.find(item => item != 'render')
      let cur = {
        title: aliaConfig[title] || '未知属性',
        dataIndex: title,
        key: title,

      };
      if( aliaConfig.render ) {
        cur.render = aliaConfig.render
      }
      newCol.push(cur)
    }
    setColumns(newCol)
  }

  useEffect(()=> {
    initColumns()

  },[])
  return (
    <div>
      <Table
        columns={config.columns||columns}
        {...config}
        rowKey={props.rowKey||(columns.length>0 ? columns[0]["key"]:'id')}
        dataSource={props.data||props.value||config.data||config.value||[]}

      />
    </div>
  )
}


export default Pagetable