import PropTypes from 'prop-types';
import { 
  TextType, 
  MainColor, 
  TypeOfButton,
  SizeOfButton, 
  BackgroundTypeOfButton, 
  paddingSmall, 
  paddingMedium,
  paddingLarge 
} from './types';


interface PropsType {
  label: string,
  type: TypeOfButton,
  onClick: () => void,
  size: SizeOfButton,
  backgroundType: BackgroundTypeOfButton
}

function Button({ label,type,size,onClick,backgroundType }: PropsType) {
  
  let padding: string = '';
  let bg: string = '';
  let textColor: TextType = 'white'
  let mainColor: MainColor = backgroundType == BackgroundTypeOfButton.simple ? '#1B4963' : 'linear-gradient(95.85deg, #09152F 0%, #1B4963 100%)'
  let noneColor: string = '#ffffff00'

  if(size == SizeOfButton.small) padding = paddingSmall
  if(size == SizeOfButton.medium) padding = paddingMedium
  if(size == SizeOfButton.large) padding = paddingLarge


  if(type == TypeOfButton.circled || type == TypeOfButton.simple) {
    bg = noneColor
    textColor = mainColor
  }else {
    bg = type == TypeOfButton.filled ? mainColor : ''
  }

  const styles = {
    background: bg,
    borderWidth: type == TypeOfButton.circled ? '2px' : '0px',
    borderStyle: 'solid',
    borderColor: type == TypeOfButton.circled ? mainColor : '',
    padding: padding,
    borderRadius: '40px',
    color: textColor,
    fontWeight:'bold',
    cursor: 'pointer'
  }


  return (
    <button onClick={onClick} style={styles}>{ label }</button>
  )
};

Button.propTypes = {
  backgroundType: PropTypes.oneOf([
    BackgroundTypeOfButton.simple, 
    BackgroundTypeOfButton.gradient
  ]),
  size: PropTypes.oneOf([
    SizeOfButton.small,
    SizeOfButton.medium,
    SizeOfButton.large
  ]),
  type: PropTypes.oneOf([
    TypeOfButton.circled,
    TypeOfButton.filled,
    TypeOfButton.simple
  ]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundType: BackgroundTypeOfButton.simple,
  size: SizeOfButton.medium,
  type: TypeOfButton.filled,
  label: 'Button',
  onClick: undefined,
};

export default Button;