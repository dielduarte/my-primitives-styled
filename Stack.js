import {styled} from './stitches.config'


export const Stack = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',

  '> * + *': {
    marginTop: '$small' 
  },

  '> *': {
    marginTop: 0,
    marginBottom: 0,
  },

  variants: {
    type: {
      recursive: {
        '*': {
          marginTop: 0,
          marginBottom: 0,
        },
      },
      splitAfter: {
        ':only-child': {
          height: '100%'
        },
        '> :nth-child(3)': {
          marginBottom: 'auto'
        }
      }
    }
  }
});
