import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 700,
    marginBottom: 20,
    background: '#f5f5f5',
  },
  cardContent: {
    wordBreak: 'break-word',
    "&:last-child": {
      paddingBottom: 10
    }
  },
  date: {
    fontSize: 14,
    marginTop: 20
  },
  pos: {
    marginBottom: 12,
  },
});

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const emojiReplace = (text) => {
  text = text.replace('Party popper', '🎉');
  text = text.replace('Partying faceMost', '🥳');
  text = text.replace('Articulated lorry', '🚛');
  text = text.replace('Delivery truck', '🚚');
  text = text.replace('Wrapped present', '🎁');
  text = text.replace('Grinning face', '😀');
  text = text.replace('Right-pointing magnifying glass', '🔎');
  text = text.replace('Bottle with popping cork', '🍾');
  return text;
}

const formattedTime = (date) => {
  const time = new Date(date * 1000);
  const day = `${time.getDate()}`.padStart(2, "0");
  return `${time.getHours()}:${time.getMinutes()} · ${day}. ${monthNames[time.getMonth()]} ${time.getFullYear()}`;
}

export const NewsSection = ({ tweets, amount }) => {
  const classes = useStyles();
  const output = Object.keys(tweets).map((key, index) => {
    const tweet = tweets[key];
    if (index >= amount) {
      return;
    }

    let text = emojiReplace(tweet.text);
    if(tweet.link != undefined) {
      text = `${text}<br/><a href="${tweet.link}" target="_blank">${tweet.link}</a>`;
    }

    return (
      <Card className={classes.card} key={index}>
        <CardContent className={classes.cardContent}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
          <Typography className={classes.date} color="textSecondary" align="right">
            {formattedTime(tweet.date)}
          </Typography>
        </CardContent>
      </Card>
    )
  });
  return output;
}

export default NewsSection;
