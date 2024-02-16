import React from 'react';

function Applications({ rows }) { // Accept rows as props
  return (
    <div className="m-5   rounded-[30px] overflow-hidden bg-white shadow-md flex-grow">
      <h2 className="col-span-{5} w-full text-left text-lg font-semibold pl-[25px] pt-[15px]">Past Applications</h2>
      <table className="w-full rounded-[30px] overflow-hidden bg-white table-auto">
        <thead className="border-b-2">
          <tr>
            <th></th>
            <th className="py-2 px-4 text-left text-sm text-gray-400">Role</th>
            <th className="py-2 px-4 text-left text-sm text-gray-400">Date</th>
            <th className="py-2 px-4 text-left text-sm text-gray-400">CTC</th>
            <th className="py-2 px-4 text-left text-sm text-gray-400">Selected</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr className='hover:bg-gray-200 cursor-pointers '>
              <td className="py-2 px-4 flex justify-center items-center">
                <img className="w-[83px] h-[48px]" alt={`${row.company} logo`} src={row.imageSrc} />
              </td>
              <td className="py-2 px-4">
                <div className="font-semibold text-black text-left">
                  {row.jobRole}
                </div>
                <div className="text-gray-500 text-xs text-left">
                  {row.company}
                </div>
              </td>
              <td className="py-2 px-4 text-sm text-left">{row.date}</td>
              <td className="py-2 px-4 text-sm text-left">{row.ctc}</td>
              <td className="py-2 px-4 text-sm text-left">{row.selected}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;