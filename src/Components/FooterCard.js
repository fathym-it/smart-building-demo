import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FooterCard({imageSrc, title, content}) { 
  return (
    <Card sx={{ mb: '1rem', width: 345 }} style={{ background: 'transparent', boxShadow: 'none'}}> 
      <CardMedia
        component="img"
        height="60"
        image={imageSrc}
        alt="green iguana"
      />
      <CardContent sx={{ borderTop: 3, borderColor: 'primary.main' }} >
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button><Button size="small">Share</Button><Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}