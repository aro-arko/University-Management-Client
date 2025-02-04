import { Button, Table } from "antd";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagementApi";

const Courses = () => {
  const { data: courses, isFetching } = useGetAllCoursesQuery(undefined);

  const tableData = courses?.data?.map(({ _id, title, prefix, code }) => ({
    key: _id,
    title,
    code: `${prefix}${code}`,
  }));

  const columns = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return <Button>Assign Faculty</Button>;
      },
    },
  ];
  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

export default Courses;
