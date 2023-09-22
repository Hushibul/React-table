import Table from '../components/Table';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import PaginationRounded from '../components/pagination/Pagination';
import useFetch from '../hooks/useFetch';
import Loading from '../loading/Loading';

const Products = () => {
  const apiUrl = 'https://dummyjson.com/products';
  const { data: tableData, loading, error } = useFetch(apiUrl);
  const tableInfo = [
    {
      columnHeading: 'Thumb',
      columnKey: 'thumbnail',
    },
    {
      columnHeading: 'Title',
      columnKey: 'title',
    },
    {
      columnHeading: 'Description',
      columnKey: 'description',
    },
    {
      columnHeading: 'Price',
      columnKey: 'price',
    },
    {
      columnHeading: 'DiscountPercentage',
      columnKey: 'discountPercentage',
    },
    {
      columnHeading: 'Rating',
      columnKey: 'rating',
    },
    {
      columnHeading: 'Brand',
      columnKey: 'brand',
    },
    {
      columnHeading: 'Category',
      columnKey: 'category',
    },
    {
      columnHeading: 'Stock',
      columnKey: 'stock',
    },
  ];

  if (!loading && !error) {
    return (
      <>
        <Breadcrumb />
        <Table tableInfo={tableInfo} tableData={tableData?.products} />
        <PaginationRounded />
      </>
    );
  } else {
    return <Loading></Loading>;
  }
};

export default Products;
