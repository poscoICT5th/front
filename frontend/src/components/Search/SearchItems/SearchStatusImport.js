import React from 'react'
import Select from 'react-select';
import { statusImport } from '../SelectOptions'


function SearchStatusImport(props) {
  return (
    <div>
      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
        작업상태
      </label>
      <Select
        defaultValue={[statusImport[0]]}
        // isMulti
        name="status"
        options={statusImport}
        className="basic-multi-select"
        classNamePrefix="select"
        maxMenuHeight={200}
        onChange={(e) => { props.setDatas({ ...props.datas, status: e.value }); console.log(props.datas) }}
      />
    </div>
  )
}

export default SearchStatusImport