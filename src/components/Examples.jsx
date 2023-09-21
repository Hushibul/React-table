import { MaterialReactTable } from 'material-react-table';
import { useEffect, useMemo, useState } from 'react';
const Example = () => {
  //data and fetching state
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  //if you want to avoid useEffect, look at the React Query example instead
  useEffect(() => {
    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }
      const url = new URL('/users', 'https://dummyjson.com/');
      url.searchParams.set(
        'skip',
        `${pagination.pageIndex * pagination.pageSize}`
      );
      url.searchParams.set('limit', `${pagination.pageSize}`);
      //   url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
      //   url.searchParams.set('globalFilter', globalFilter ?? '');
      //   url.searchParams.set('select', JSON.stringify(sorting ?? []));
      try {
        const response = await fetch(url.href);
        const json = await response.json();
        console.log(
          ':rocket: ~ file: Example.jsx:40 ~ fetchData ~ json:',
          json
        );
        setData(json.users);
        setRowCount(json.total);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnFilters, pagination.pageIndex, pagination.pageSize, sorting]);
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      //column definitions...
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'maidenName',
        header: 'Maiden Name',
      },
      {
        accessorKey: 'age',
        header: 'Age',
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'username',
        header: 'Username',
      },
      {
        accessorKey: 'bloodGroup',
        header: 'Blood Group',
      },
      {
        accessorKey: 'eyeColor',
        header: 'Eye Color',
      },
      //end
    ],
    []
  );
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      getRowId={(row) => row.phoneNumber}
      manualFiltering
      manualPagination
      manualSorting
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: 'error',
              children: 'Error loading data',
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      muiTableHeadCellProps={{
        sx: {
          fontWeight: 'bold',
          fontSize: '14px',
          backgroundColor: '#c0e3e5',
        },
      }}
      muiTableFooterProps={{
        sx: {
          display: 'none',
        },
      }}
      muiTablePaginationProps={{
        sx: {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'yellow',
        },
      }}
      rowCount={rowCount}
      state={{
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isRefetching,
        sorting,
      }}
    />
  );
};
export default Example;
