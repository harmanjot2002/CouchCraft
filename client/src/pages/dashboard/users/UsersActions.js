import { Box, CircularProgress, Fab } from '@mui/material';
import { useEffect, useState } from 'react';
import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { updateStatus } from '../../../actions/user';
import { useValue } from '../../../context/ContextProvider';

const UsersActions = ({ params, rowId, setRowId }) => {
  const { dispatch } = useValue();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
  
    const { role, active, _id } = params.row;
    try {
      const result = await updateStatus({ role, active }, _id, dispatch);
      console.log('Result:', result);
      if (result) {
        setSuccess(true);
        setRowId(null);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };
  

  useEffect(() => {
    console.log('useEffect - rowId:', rowId);
    console.log('useEffect - success:', success);
  
    if (rowId === params.id && success) {
      console.log('Setting success to false');
      setSuccess(false);
    }
  }, [rowId, success, params.id]);
  

  return (
    <Box sx={{ m: 1, position: 'relative' }}>
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            '&:hover': { bgcolor: green[700] },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSubmit}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default UsersActions;
