import styled from "styled-components";

import { screenSizes } from "../utils/constants";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  &:has(button):has(td) {
    display: flex;
    justify-content: flex-start;
    gap: 7.7rem;
  }

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: 1fr 1.3fr;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.525rem;
  font-weight: 600;
  color: var(--color-red-800);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

FormRow.defaultProps = {
  flex: "normal",
};

export default FormRow;
