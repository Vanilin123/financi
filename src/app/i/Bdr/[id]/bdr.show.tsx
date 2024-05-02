import { BdrResponse } from "@/types/bdr.types";
import * as XLSX from 'xlsx/xlsx.mjs';

export function Bdr({ item }: { item: BdrResponse | undefined}) {
    function html_table_to_excel(type:any)
    {
        var data = document.getElementById('employee_data');

        var file = XLSX.utils.table_to_book(data, {sheet: "sheet1"});

        XLSX.write(file, { bookType: type, bookSST: true, type: 'base64' });

        XLSX.writeFile(file, 'file.' + type);
    }

    const export_button = document.getElementById('export_button');

    export_button?.addEventListener('click', () =>  {
        html_table_to_excel('xlsx');
    });
return(
    <div>
      <div className="flex__vigr">
      <h1>{item?.name}</h1>
      </div>
        <table id="employee_data" className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">План</th>
      <th scope="col">Факт</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Выручка</th>
      <td className="green">{item?.planrevenue}</td>
      <td className="green">{item?.revenue}</td>
    </tr>
    <tr>
      <th scope="row">Производственные расходы</th>
      <td className="red">{item?.planproductioncosts}</td>
      <td className="red">{item?.productioncosts}</td>
    </tr>
    <tr>
      <th scope="row">Валовая прибыль общая</th>
      <td className="green">{item?.planoperationalprofit}</td>
      <td className="green">{item?.operationalprofit}</td>
    </tr>
    <tr>
      <th scope="row">Косвенные расходы</th>
      <td className="red">{item?.planindirectcosts}</td>
      <td className="red">{item?.indirectcosts}</td>
    </tr>
    <tr>
      <th scope="row">Опперационная прибыль</th>
      <td className="green">{item?.plannetprofit}</td>
      <td className="green">{item?.netprofit}</td>
    </tr>
    <tr>
      <th scope="row">EBINT</th>
      <td className="green">{item?.planebint}</td>
      <td className="green">{item?.ebint}</td>
    </tr>
    <tr>
      <th scope="row">Чистая прибыль</th>
      <td className="green">{item?.plangrossprofit}</td>
      <td className="green">{item?.grossprofit}</td>
    </tr>
  </tbody>
</table>
<div className="flex__vigr">
<button id="export_button" className="Button_Form">Выгрузить</button>
</div>
    </div>
)
}