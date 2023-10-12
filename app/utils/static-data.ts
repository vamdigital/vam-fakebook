const data = [
  {
    customerName: "Santa Monica",
    customerSince: "1995",
    amountDue: 10800,
    dueDate: "10/12/2023",
    isPaid: false,
  },
  {
    customerName: "Stankonia",
    customerSince: "2000",
    amountDue: 8000,
    dueDate: "10/13/2023",
    isPaid: false,
  },
  {
    customerName: "Ocean Avenue",
    customerSince: "2003",
    amountDue: 9500,
    dueDate: "09/10/2023",
    isPaid: true,
  },
  {
    customerName: "Tubthumper",
    customerSince: "1997",
    amountDue: 14000,
    dueDate: "10/28/2023",
    isPaid: false,
  },
  {
    customerName: "Wide Open Space",
    customerSince: "1998",
    amountDue: 4600,
    dueDate: "11/28/2023",
    isPaid: false,
  },
];

type Data = {
  id: string;
  customerName: string;
  customerSince: string;
  amountDue: number;
  dueDate: string;
  isPaid: boolean;
}[];
