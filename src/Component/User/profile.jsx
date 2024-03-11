import React from "react";
import styled from "styled-components";
import TopBar from "./topbar";

const Wrapper = styled.div`
  margin: 50px;
  display: flex;
`;

const Heading = styled.div`
  color: red;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InnerContainer = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  width: 100%;
`;

const Label = styled.div`
  margin-right: 30px;
  width: 100px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  align-items: center;
  padding-left: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
`;

const Select = styled.select`
  width: 265px;
  height: 45px;
  align-items: center;
  color: gray;
  font-size: 16px;
`;

function Profile() {
  return (
    <Wrapper>
      <TopBar />
      <div>
        <Heading>Modify Profile</Heading>
        <InnerContainer>
          <div className="df jc">
            <div>
              <div className="df b">
                <Label>You are:</Label>
                <Select>
                  <option value="Owner">Owner</option>
                  <option value="Dealer">Dealer</option>
                </Select>
              </div>
              <div className="df b">
                <Label>First Name</Label>
                <Input type="text" placeholder="First Name" />
              </div>
              <div className="df b">
                <Label>Last Name</Label>
                <Input type="text" placeholder="Last Name" />
              </div>
              <div className="df b">
                <Label>Age</Label>
                <Input type="text" placeholder="Age" />
              </div>
            </div>
            <div>
              <div className="df b">
                <Label>Gender</Label>
                <Select>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </Select>
              </div>
              <div className="df b">
                <Label>Email</Label>
                <Input type="text" placeholder="Email" />
              </div>
              <div className="df b">
                <Label>Phone</Label>
                <Input type="text" placeholder="Phone" />
              </div>
              <div className="df b">
                <Label>Address</Label>
                <Input type="text" placeholder="Address" />
              </div>
            </div>
          </div>
          <div style={{ justifyContent: "end" }} className="df">
            <Button>Save</Button>
          </div>
        </InnerContainer>
      </div>
    </Wrapper>
  );
}

export default Profile;
