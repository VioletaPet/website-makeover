import React, { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import './BookingModal.scss';

export const BookingModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: '#7E001B',
          color: 'white',
          height: 50,
          fontSize: 16,
          '&:hover': {
            backgroundColor: '#640016',
          }
        }}
      >
        Jetzt vereinbaren!
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 600,
            bgcolor: 'white',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">Buchen Sie ein Kennenlerngespräch</Typography>
          <iframe
            src="https://tidycal.com/reenergize-with-elli/20-min-get-to-know-call?hide-back=true"
            className="tidycal-calender"
            title="TidyCal Booking"
            style={{
              width: '100%',
              height: '650px',
              border: 'none',
              marginBottom: '16px'
            }}
          >
          </iframe>

          <Button
            onClick={handleClose}
          >
            Schließen
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default BookingModal
