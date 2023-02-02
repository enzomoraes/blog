import * as TI from './TagInput.styles';
import { TagsInput } from 'react-tag-input-component';

export interface TagInputProps {
  onChange: (tags: string[]) => any;
  placeholder: string;
  tags: string[];
}

function TagInput(props: TagInputProps) {
  return (
    <TI.Wrapper>
      <TagsInput
        placeHolder={props.placeholder}
        onChange={props.onChange}
        value={props.tags}
        name='fruits'
      />
    </TI.Wrapper>
  );
}

export default TagInput;
