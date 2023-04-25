import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      Name: "Cleaning Service", // This is the name of the service
      img: "https://images.pexels.com/photos/6197110/pexels-photo-6197110.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Raza",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Completed",
    },
    {
      id: 2235235,
      Name: "AC Gas Filling",
      img: "https://images.pexels.com/photos/6197110/pexels-photo-6197110.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Nadeem",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      Name: "AC Repair",
      img: "https://images.pexels.com/photos/6197110/pexels-photo-6197110.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Muneeb",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      Name: "AC Gas Filling",
      img: "https://images.pexels.com/photos/6197110/pexels-photo-6197110.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Muzammil",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Completed",
    },
    {
      id: 2342355,
      Name: "Air Cooling Repairing",
      img: "https://images.pexels.com/photos/6197110/pexels-photo-6197110.jpeg?auto=compress&cs=tinysrgb&w=600",
      customer: "Hammad",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.Name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
