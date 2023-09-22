import Table from '../components/Table';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import PaginationRounded from '../components/pagination/Pagination';
import useFetch from '../hooks/useFetch';
import Loading from '../loading/Loading';

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
      columnHeading: 'Blood group',
      columnKey: 'bloodGroup',
    },
    {
      columnHeading: 'Eye color',
      columnKey: 'eyeColor',
    },
  ];

  if (!loading && !error) {
    return (
      <>
        <Breadcrumb />
        <Table tableInfo={tableInfo} tableData={userData?.users} />
        <PaginationRounded />
      </>
    );
    // return <h1>users</h1>;
  } else {
    return <Loading></Loading>;
  }
};

export default Users;
