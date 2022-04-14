import {
  chakra,
  TextareaProps,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize';

type Props = TextareaAutosizeProps &
  TextareaProps & {
    errorMessage?: string;
    variant?: 'inverted';
  };

const Area = chakra(TextareaAutosize, {});

export const TextArea = ({
  isInvalid,
  placeholder,
  errorMessage,
  variant,
  ...props
}: Props) => {
  const styles = useMultiStyleConfig('FloatingTextArea', { variant });
  const hideLabel = isInvalid && errorMessage;

  return (
    <FormControl sx={styles.container} isInvalid={isInvalid}>
      <Area
        aria-invalid={isInvalid}
        sx={styles.textArea}
        placeholder={' '}
        {...props}
      />
      {!hideLabel && <FormLabel sx={styles.label}>{placeholder}</FormLabel>}
      {errorMessage && (
        <FormErrorMessage sx={styles.errorMessage}>
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
