import Table from '../components/Table';
import useFetch from '../hooks/useFetch';

const Users = () => {
  const apiUrl = 'https://dummyjson.com/users';
  const { data: userData, loading, error } = useFetch(apiUrl);
  const tableInfo = [
    {
      columnHeading: 'First Name',
      columnKey: 'firstName',
    },
    {
      columnHeading: 'Last Name',
      columnKey: 'lastName',
    },
    {
      columnHeading: 'Maiden Name',
      columnKey: 'maidenName',
    },
    {
      columnHeading: 'Age',
      columnKey: 'age',
    },
    {
      columnHeading: 'Gender',
      columnKey: 'gender',
    },
    {
      columnHeading: 'Email',
      columnKey: 'email',
    },
    {
      columnHeading: 'Username',
      columnKey: 'username',
    },
    {
      columnHeading: 'Bloodgroup',
      columnKey: 'bloodGroup',
    },
    {
      columnHeading: 'Eyecolor',
      columnKey: 'eyeColor',
    },
  ];
  return <Table tableInfo={tableInfo} userData={userData}></Table>;
};

export default Users;
