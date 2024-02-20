import { useEffect, useMemo, useState } from 'react';
import { Avatar, Box, Hidden, Tooltip, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { useValue } from '../../../context/ContextProvider';
import { getRooms } from '../../../actions/room';
import moment from 'moment';
import { grey } from '@mui/material/colors';
import RoomsActions from './RoomsActions';

const Rooms = ({ setSelectedLink, link }) => {
  const {
    state: { rooms },
    dispatch,
  } = useValue();

  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    setSelectedLink(link);
    if (rooms.length === 0) getRooms(dispatch);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'images',
        headerName: 'Photo',
        width: 80,
        renderCell: (params) => (
          <Avatar src={params.row.images[0]} variant="rounded" />
        ),
        sortable: false,
        filterable: false,
      },
      {
        field: 'price',
        headerName: 'Cost',
        width: 80,
        renderCell: (params) => '$' + params.row.price,
      },
      { field: 'title', headerName: 'Title', width: 170 },
      { field: 'description', headerName: 'Description', width: 300 },
      { field: 'lng', headerName: 'Longitude', width: 180 },
      { field: 'lat', headerName: 'Latitude', width: 180 },

      {
        field: 'uName',
        headerName: 'Added by',
        width: 100,
        renderCell: (params) => (
          <Tooltip title={params.row.uName}>
            <Avatar src={params.row.uPhoto} />
          </Tooltip>
        ),
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 160,
        renderCell: (params) =>
          moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
      },
      { field: '_id', headerName: 'ID'},
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        width: 200,
        renderCell: (params) => <RoomsActions {...{ params }} />,
      },
    ],
    []
  );

  // Filter out the ID column if it should be hidden
  const filteredColumns = useMemo(() => columns.filter(col => col.field !== '_id'), []);

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: 'center', mt: 3, mb: 3 }}
      >
        Manage Rooms
      </Typography>
      <DataGrid
        columns={filteredColumns}
        rows={rooms}
        getRowId={(row) => row._id}
        pagination
        autoPageSize 
        pageSizeOptions={[5, 10, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? grey[200] : grey[900],
          },
        }}
      />
    </Box>
  );
};

export default Rooms;