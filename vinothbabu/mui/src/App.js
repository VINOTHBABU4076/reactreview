import Button from '@mui/material/Button';
import Settings from '@mui/icons-material/Settings';

function App() {
  return (
    <>
    <Button  startIcon={<Settings/>}
    variant="text" 
    color="secondary">Text</Button>
    <Button 
    variant="contained" 
    size="small">contained</Button>
    <Button 
    variant="outlined" 
    disabled 
    size="small">Outlined</Button>
    <Button variant="contained" sx={{
      backgroundColor:"blue",
      margin:5,
      "&:hover":{
        backgroundColor:"skyblue"
      },
    }}>New Button</Button>
    </>

    
    
  );
}

export default App;
