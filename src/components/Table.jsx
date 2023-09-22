/* eslint-disable react/prop-types */
// import { tableData } from '../constants/constant';

const Table = ({ userData, tableInfo }) => {
  console.log('User Data', userData);
  console.log('table info:', tableInfo);
  return (
    <div className='wrapper'>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              {tableInfo.map((item, index) => (
                <th key={index}>{item.columnHeading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userData?.users.map((item, index) => (
              <tr key={index}>
                {tableInfo.map((key, index) => (
                  // <td key={index}>{item.columnHeading}</td>
                  <td key={index}>{item[key.columnKey]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
