/* eslint-disable react/prop-types */
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';

const Leaderboard = () => {

    const mockLeaderboardData = [
        {
          _id: '6548e856d376b0dae31a78e4',
          userName: 'Nora',
          NumOfWonGames: 1,
          NumOfLostGames: 1,
          createdAt: '2023-11-06T13:21:26.896+00:00',
          updatedAt: '2023-11-06T13:21:26.896+00:00',
          __v: 0,
        },
        {
          _id: '6548e856d376b0dae31a78e5',
          userName: 'John',
          NumOfWonGames: 5,
          NumOfLostGames: 2,
          createdAt: '2023-11-07T10:15:00.000+00:00',
          updatedAt: '2023-11-07T10:15:00.000+00:00',
          __v: 0,
        },
        {
          _id: '6548e856d376b0dae31a78e6',
          userName: 'Alice',
          NumOfWonGames: 3,
          NumOfLostGames: 0,
          createdAt: '2023-11-08T08:45:00.000+00:00',
          updatedAt: '2023-11-08T08:45:00.000+00:00',
          __v: 0,
        },
        {
          _id: '6548e856d376b0dae31a78e7',
          userName: 'Bob',
          NumOfWonGames: 2,
          NumOfLostGames: 3,
          createdAt: '2023-11-09T14:30:00.000+00:00',
          updatedAt: '2023-11-09T14:30:00.000+00:00',
          __v: 0,
        },
      ];
      


  return (
    <>
    <h1 className='text-center' style={{fontSize:'2rem'}}>TOP 20</h1>
    <Table aria-label="Leaderboard Table">
      <TableHeader>
        <TableColumn>Username</TableColumn>
        <TableColumn>Wins</TableColumn>
        <TableColumn>Losses</TableColumn>
        <TableColumn>Created At</TableColumn>
      </TableHeader>
      <TableBody>
       {/* {leaderboardData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.userName}</TableCell>
            <TableCell>{item.NumOfWonGames}</TableCell>
            <TableCell>{item.NumOfLostGames}</TableCell>
            <TableCell>{item.createdAt}</TableCell>
          </TableRow>
       ))} */}
       {mockLeaderboardData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.userName}</TableCell>
            <TableCell>{item.NumOfWonGames}</TableCell>
            <TableCell>{item.NumOfLostGames}</TableCell>
            <TableCell>{item.createdAt}</TableCell>
          </TableRow>))}
       </TableBody>
    </Table>
    </>
  );
};

export default Leaderboard;
