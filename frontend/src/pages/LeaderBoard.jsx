/* eslint-disable react/prop-types */
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import { getLeaderBoardData } from '../lib/dbClient';
import { useState,useEffect } from 'react';


const Leaderboard = () => {
   
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
      const autorun = async () => {
        try {
          const res = await getLeaderBoardData();
          setLeaderboardData(res);
        } catch (error) {
          console.error(error);
        }
      };
      autorun();
    },[] );


  return (
    <div className='justify-center flex flex-col items-center'>
    <h1 className='text-center' style={{fontSize:'2rem'}}>TOP 20</h1>
    <Table aria-label="Leaderboard Table" className='w-[800px] leaderboard-table ' >
      <TableHeader>
        <TableColumn>Username</TableColumn>
        <TableColumn>Wins</TableColumn>
        <TableColumn>Created At</TableColumn>
      </TableHeader>
      <TableBody>
  { leaderboardData &&  (leaderboardData.map((item, index) => (
    <TableRow key={index} >
      <TableCell>{item.userName}</TableCell>
      <TableCell>{item.NumOfWonGames}</TableCell>
      <TableCell>{item.createdAt}</TableCell>
    </TableRow>
  )))}
       </TableBody>
    </Table>
    </div>
  );
};

export default Leaderboard;