import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainViewCard: {
    width: 180,
    minHeight: 120,
    height: 'auto',
    borderRadius: 5,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  viewCard: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginLeft: 20,
  },
  textPayAccount: {
    fontSize: 18,
    fontWeight: '500',
    color: '#7D7976',
  },
});

export {styles};
