import './WidgetLg.css';
const WidgetLg = () => {
  const CustomButton=({type})=>{
    return <button className={'widgetLgButton '+type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <div className="widgetLgTitle">Latest transactions</div>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://imgs.search.brave.com/vRrTws13r9jDY4EkNZTe6uV6WhoBaE5Y2Q6QOUE6OFc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ3OTAxMDgzNzct/YmU5YzI5YjI5MzMw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGRY/TmxjaVV5TUhCeWIy/WnBiR1Y4Wlc1OE1I/eDhNSHg4ZkRBPQ.jpeg" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgAmount">
                <CustomButton type="Approved" />
            </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
