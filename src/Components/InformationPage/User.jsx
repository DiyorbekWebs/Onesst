import React from "react";
import styled from "styled-components";
const Userr = styled.div`
  padding: 24px 0px;
`;
const Box = styled.div`
  display: flex;
  gap: 72px;
`;
export default function User() {
  return (
    <>
      <Userr>
        <div className="container main">
          <Box>
            <PartOne>
              <img />
            </PartOne>
          </Box>
        </div>
      </Userr>
    </>
  );
}
