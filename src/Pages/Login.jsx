import { useState, useContext } from "react";
import axios from "axios";
import { authContext } from "../Context/AuthContext";
import { loading, success, error } from "../Context/action";
import { Navigate } from "react-router-dom";

import {
  Container,
  Box,
  Image,
  Link,
  Text,
  FormLabel,
  Input,
  Button,
  Stack,
  Flex,
  Spinner,
} from "@chakra-ui/react";

export default function Login() {
  const { state, dispatch } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const handleClick = () => {
    dispatch(loading);
    axios
      .post(`https://reqres.in/api/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.token);
        alert("Login successful");
        dispatch({ ...success, payload: res.data.token });
      })
      .catch((err) => {
        dispatch({ ...error, payload: "Something went wrong" });
      });
  };

  const changePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  if (state.loading) {
    return (
      <Container w="500px" h="500px" margin="auto" mt="60px">
        <Box w="45%" h="80px" m="auto">
          <Image
            src="//static.hsappstatic.net/salesImages/static-1.434/logos/hubspot-standard.svg"
            h="100%"
          />
        </Box>
        <Text>
          Dont have an account?{" "}
          <Link fontWeight="bold" color="teal.700">
            Signup
          </Link>{" "}
        </Text>
        <Stack spacing={10} w="100%" mt="30px">
          <Box>
            <FormLabel color="rgba(0,0,0,0.64)">Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box>
            <FormLabel color="rgba(0,0,0,0.64)">Password</FormLabel>
            <FormLabel onClick={changePasswordType}>
              <Link fontSize="14px" color="blue.400">
                Show Password
              </Link>
            </FormLabel>
            <Input
              type={passwordType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel mt="20px">
              <Link fontSize="14px" color="blue.400">
                Forgot Password
              </Link>
            </FormLabel>
          </Box>
          <Box onClick={handleClick}>
            <Spinner />
          </Box>
          <Flex align="center" bgColor="#5886d4" borderRadius="5px">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABg1BMVEX/////QDEAhvkAqkv/vQD///3//v//vAAAh/j/QDIAfPYAqk0Aq0svmPj/QS8Advd7uvuex/sAhPkAp0P/Oyv/uAAAqVD/9/b/oZsAgPj/sav/NyYApkD/urT/9PL/NSL/h33/2dT/cmf/+OL/xQDw+/T/4N3/qaP/7Or/z8v/npb/YVX/W0//aV7/yMT/gHj/Szv/lYz/KhX/0lf/qgD/sQD//PLS8uKz5Mm51/wAozjo+PDB6tYArTwfuW3/v7v/b2X/KAb/U0T/AAD/eXH/Y1v/tLX/6uL/IiT/5pT/aR/+9Nj/zUb/gRr/5J//lAj/Vyj/7Lb/2XH/nQn/XiT/TCr/dhv/gg//yDb/NDb/e1D/8ZHK4f6ewfv/1WBHnfzr9v//3IIAbvpRwWfA3vxirvnAtg7tvAeQtBtu0KJysC5Wrz6K2rOhtBlIv3ui2bXXuwlRofmDsjJkrzBbxo6Z1ssAmIkAjNcAo3QAkMU1wH0AlbEAmhYApF4AmacAnoqBz6AUnUauAAARbUlEQVR4nO1dC2PaVpYWCAlkKXKMZGGMjGzHYOL4gUljHLBp7KbTzaSTadKnZ5Idd7dplta12x1P03o7M/npc865V/gBEhgEwjv6EsAGIt1P533uvYogRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBH+/SDLrZ8EQZIkev3/ACImSTJ/OofEHzecJ4qK0bv6AVCT2KehDCwwIAlgKLcRkVxNvekML8gOeEpyBgGUGS9JuPHWyIlkSqXiwvrc7PLy8gxgeXl27v27C8VS/qL8pAvPNwlyvnh3dmX+8aN7+2VFUWKmaeoxpVzeX11b3NhcXl8oMRlyPR5nnW3pHY6VrA9+La3PbHy4WlbMHMBE6Aj8Ad/Qy/v3FjfnihkySkaRqe54gqhBdAB7o0Hm5zb2dSKmx2LAK3YOEGZMj3GuZvnRclFAcrLLbSxFST4TBUFE88W5xb29CogspgAfoneJo8sUPlLMyt4HqzMLeZklA7I8jvw4cGySkCmtb+5XKiZIihgyKm30Ykg+xqjrTqW8AepKkWVc/SuL34KQKc5ulB3H1BVURNJPJsZ2GaKuohjxAiimE1tcXsjzg4XLpSOYlgpSafmR4uQYGy6hTuKjT3WFPWKoqzHdzJn3VoqSwJ3OuIEEKBVnF3MOWh8OOuZS05lvaWfIv6G4KmvmnLVZcq1h07kIN5LBa2luUXdMxfWWVzXS852LPzm5xdkSHW5sPCpTTnQw6/PlnNnBY/YONEozV95YzwhSK0SGDyqPILqv7OdMVMgO4roWSQiS+yslQRobh8q1dGEtZ6JbdENAnyJEnwt+Nbe2IHDfHD5ImfIzH1R0pVNQ74Mn+NdY5YPZfNjMWgALvPsY47sygPgu8GMkzcp8MTMu2U1+7kPHjHWMCH2ypFzOebSeCdnX8Goiv7yPEd4rsPfHEQ5n5lbnMjzOhsYQg1ZppZwLkBsHJgO6sz+bl0KupySpOG/mlOAUtAXKiXLKTD68NJwF5IXHEAQDcDAdCIJfNs0Z9KghcaRSsLSao9w5cIogQLBEc6YkhBsUS2sVlkAHL0QQYW5vJROuK5UW7lUolQycHtWNpr7Muq2hMZQXFh1evSuBhgpG0UQvQ2l9KIaIF7Y4D06mm37yj+kytL1LTK7aMLUFYiBBIjh6agKFQbyw+RUTSsEuKsqY6TRmlySVx/zXDv0b7Hnourm3nA/Px8jYccrPls2Y0iVQEA1MwXRW5lO3lNjhLx3rENbQMXMrrDkZFkNBysyVHYoS3RgqvFNDPWAnx8F6w6yLql/9J7EYRPpMmA03ZLjwoaPzctAfZFM5xzHL99Y2NjdXVjY3N+cfrZZ1x3FQuJ2UlGww1IYU6OiGo/PGtT9BbBNWKvra5tw6TsXg1FM+T/M0K4v7zp7Z5oapET6TD7X6BQMRlitmjBlXF366s7e3OLtQylwIa6yzmikV39+o7DlX3DG2wFcyAp/BGDVLyZ3YXPjA9GbFBEHtCNMx7y2XfI6YmVuL5dh0DakEqehyiMopU9MQkzWfEK8w54FpV/nxXL5LVzD//kYZ3A53tECwPJMJT0FlzDBkITOTo5a9twyJo6M8nvuI+HkOmLpYpbnH5Rzzq7qSi6GTCcuNSvzP3VXTL5VhH5mVD2eLssCnozoezp3Ll4qz97DPg7loZTnDKuvwABXTfM6np6aTB9Jz+vyCW557iVB2l5xI8sKGCWWYnjNZoA+tA0XNbXmubLbF6csyBAtcnS2xofq6fTbbSKqKzZ6cPpNhczwhMWSrXz56nPPpOunUQ3IW190ekjdDubUUA0nmf7daiWEclCVBCEuG1LeQfxczFV3x8jSY6JjOfPG6liRJmfW1Fb/AMhKgQD5a/A9F98pHWVlQmS9dXwZw8UohVhN8EKBSW08e/N7tE3WiCO7QXOkzoElS2NMxePqnHy9N/0E/IH/JpHYFQLDfytVdyxcqpGeJ5FLij58ckKa289Njlc0+CVLkDHmNAgzgzv3pZDKx9N5nBwqbIzrXVlbNVxbzfNFhH4cPfToNRvA8kUwixQdfgKZSrnxpIZDurBXd+YzrjlWSePwIDxC+t15MJxJIcin55ed8IRBPtemX3P66xNO064sxdAnimJ8uIUPEUuJT0FRd0Xm/VOEdzjzlMWMzQX09wLifcYJJ5Pje7w8UthCGan0wTGeDQvaYrC+4PmDcX01zekn8O/3FwQEvXbGajzn7d3lAu6kyFLaSyZYISVU//fxAibFVXUrMdGbxazeUHUISnj1IXMbSg08oClIa5ywWhdCa8IFAEj6eTrRRhLBBnkYxy7PjsrCgH5DzuLPUxjC5NP3l5wfUETQXi12PMh6JWUcQw+fJ5CV2/PXTz9DXgAgzXY/CmlkDDIMOMAwjYJXsizYREs+l976AuJiDbKYXLR049RzoEnmCYsDW/WQHhmiM01/qSm5F8uuquYMbrFVPDQ55KDLEUT39qjPDJCY4nx/cFTy7ahcPNHgPZngJxfOvkh5CxATnTxlB6r7FZ9DcU2o9BQ649E8SXjIETP+ZFtn7nxz5Td0aGC+HwQ8TmhceDAnTd+ReNFCSXk1OTgyGyakhMbzznz4Mp5eEHkv0qWw8NRDiE6/dRbuBMoR4f9/bDBPT93s8ozSVTccHADL8yxAMEcXz9GM/hs96PdLADFPZlBC8t0ENfO4RLJizeTo6hul0+4bNQEj6MZxeujNChpOHwbMTWB/Rm+HHo2GYIi81OYRwgfnYM19HszUShozj5MvgN2OCGW498WCYTCST0y9GxBCjRWryIZELND2F67X1tZ8Mvx4VQ3xMTgXPEIfmwzA5/aRXlQmGIR0pSC2losWPYfLZiBlKAa+1ocpvPBimkOHtwDd94cH87HD0DIOe6u/OcGR2OCyGpKWeER+ixdcjtcPbQ9lkInnFQ5yKGl08jLd8aeAEt7xzmuTocppzhsFGQ3Jdz/wy7xHlpdwOg5ch+WbP2iKJtcWoqieS4cPAiyeaffatnq5VH/bWrPAWI2cYpJ7SUjqo8b0IgqvpscaXJOzT9KSOKY/vseop4KSUupx37ie9K0Ts00g9nFfqLkPeqEp7yBHexAo4+HiIvbZkojPFJO+1dY1R1C/t3msjIp4MU+nsEG4uxZMaTzuE6uKO0LUhTKuCptJdGMb5c7wDQ/Sk2IkaAkMUEO95d+b54AktFvVXU9SFV/812QMm0h0ZEsWJW2x+JPis5vlXCW+Gb/77sIeON8jwm9u94LWnlgLDn9zrFSg9bJh6zj0lEt/uWjvdTyr1NjUDX3joxRDenbgd/PwTO5zn/GHizf8Yqt3sPnipp6kNVPdXLF50IhjPPgyG1dXTwuNFB2eKyeqP34mWYTSq3V14TzvP4SiHr70Sn1Q8nXrJdjEMoSn8vIMM4a1vv1dVURWto66dBakn9QKGL//CnEonitlbhwHxaUf7Wgzg9+YH21JFURON46o7QM+x9xKpcaHwVIp8aRvDFE09HQbI6cqpL6+noRTnzXcGCFADuEIcMNtASz28zdOCDsEinn01tAVJtCYqmbhUJr7ZJQ0VXSEGYRsyKGnWM/dOx4fiaAiSsDV9xRK/NSxVUzWRUbRPgjiLRLOoca/Ee2Iok9ytc6OanpN8851qWaCeKrADNVVtazsAGaIIJ6iW75C1Qax4fTi0tRhw4GcXDfHHv1qqZZD4QIz4xz6tD34W9DNxzxoxDWY4LIboRJ5e8Kbffm9ZokoMEShIQzwqSD3GhA4n4GuvmBV6MUw9HNrCOGSI67yTzIf+ULMstECNM9SQpGFt9723ld9UGBypT5sjlf3pcHgrhvD0z2l1cDLx4/+KFnFqAc1R1Gz0p/2NwL3vKaSk3gRT6dvDM0Oqju7cJzX98XtyMeBfLnBEhlrtuNAvRbaZD3TUR4SkpEOkKMhbNNf9w/eYxqjoQC+IUUV/Y9Sa9X7tkPY9/eTXxyElHeI6Xd6PgjTGIrPTVFXVLuqphg5VbBb68gVsTdXUROeigvuZieF5UgLuKXny5q8WxAiVMRQvKKnGAodoNPveuSY8ZNbmxTCb+qaXflffoDt+1I9BVBaanNgBmKDaNTcs8nKw+2I3Vp1BJPRrF0PhlB2mnxHca3eiGeQ41U4MCYZ9WmW3ruyxKSazouNwKu7jRpmfGe4WYXb0+rEN+ukhQ3KvqmEfbxeEHtfz8nsrY0WRyvo4GbDCNAXDIVoiv9Qnlqh5C5AUVbMbR3W+o7A7Q3rIL1+nvCsKPicz1dMSz0Eo0nDqp4bmKULGEaKGeLrjmmD3pdFw0L+9nkh7dvLZSiEMFYF3uy8T5Lcb2W4Y6nm61gYV8wDVqDWOqvyydKEIB905tX5+m053bly0GE7x24UPjaHA/6cK6R1YopcZYhAhlpqtHh/VpSvbB9qHJwmFnWbDNoxffk2nvTr5KN0JFOGI9pnWGzXNTbq9REmaap0d1S/pleTeDMMVBTwBP9HQVGP37/8XT7N4n7oqQMxIJ1+ObNufJOz8xrTRhyHBsMVG8zw48peWMaFGbJ9aNtm1KtrGz6mODRpiOPnTSKTHxigIRzUDe0+gj5YfQ0h67BoaZL1w6frTneUL9er2mVqrkWYz37X797csLb1EkRzQROpwhFs3wXTObA3Hr/n5VBY5RKNWUxvNk+2dar1eINTr1Z3tk+aZVavZLJel8ANf3hV/TaWvpG0k0nR8ajjbgTrzQ+Np2Kx88hEglR5I0jBqtmg1GqenzXfv3jWbp2eNBqQFto39D1agqBrW06q4a/3jVvqqCIFi+vUIRUjerHBi2dyj+IOyH3gy2kC5n0blicoDLLza2j/fZq8STGVvfTPKe9FSmlw4Uo1WJ7FHtDyTdu6GVSosNdGtTMCn/vLrpZknmvIeejbTxlAQCk2D7AytsRut9h/P39HEc2WnxogGYQO7+q6u8poi6AWXPaB6ahh40UXNp87oA6q2a/18K8szOJauvRRCuLWSLFXPbNYLFrWu5tgz6JpBgvN2ojX7BEbI/uOSEe+gBsOoNmpqN4/aB0W8ZLv2W8jE02zC8KEcgooKFLYxfbMsCtlBEaQenipaxm//SKVZVfgwzHtE1huYcgUpRBb6Dc2yd//5FgJ9Njvlptsj3+ZPV3bnjAJbcHYosggEPtqwf/k1no3fdvemjvzWLmwyVGYe1dLEgHi23DKoK4SNW6941TvgPvdBaFablsHz0y6RsUfQlWL+ptb42+EoI70HCkdQ/7BLH4jDwRyCpuuMWuOk0NMKlaFTPGkwisEYo0ZpHOi90eAzrmEThBHsnNWMYFRUpAoDKKpG7WyHUQvHAC/yAyUqvPvNVq1ASFIvVrOM2mm91VMOX4iQMkLBaASRn2KdCEZoqzutWYGw73cj8bt71cGnGkGEC2wLWGfUiWTTGaHfWEviy4QK26fAUXQbjapvZ/yS2DSRzxKwWG+IxycFfuXC108E76FBDndyrJGu0rTb5dlFb36UwGiaS9GuNd5Vx4PYVaBbqJ4cGzZv+l8jx6EKjChCDHy30/dE+VDh3p2mfnIGcjR4h7AnevRVixaOGcRvqHMTfYNZI/Z4qydnYI9G9/6GC96Psm0N+bmXagw5CnQ7c+wY1cHn1LBn3EtVhVcCCNZq2tlJlSVpwlBuIzQw+DQEq+MKIMgakewuQVUzar/VGs2dOjtEa9pxLGleROHorCEaYFvU3W9VySqPCSrrdINjgujXrIY92v4A6to8azQsDWmQabo0eU9YVa3GWfOkGkYBHxSkenXnqHl6fNywVJIk8VQtq9E4Pj5tHm1X661weuPgOkVBYlMxR4h3CHjlEzX8i6GOs3+QT7y0a0C6APYGU87u99AaS7gczim1WFB/V5bZvXiZAd5UhpwlOhK5vaeLS2PcsHCTb5sZIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIjw74N/AU5N9d0toZ4VAAAAAElFTkSuQmCC"
              w="50px"
              h="50px"
            />
            <Box ml="150px">
              {" "}
              <Link h="45px" w="100%" fontWeight="bold" color="white">
                Sign in to continue
              </Link>
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }

  if (state.isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Container w="500px" h="500px" margin="auto" mt="60px">
      <Box w="45%" h="80px" m="auto">
        <Image
          src="//static.hsappstatic.net/salesImages/static-1.434/logos/hubspot-standard.svg"
          h="100%"
        />
      </Box>
      <Text>
        Dont have an account?{" "}
        <Link fontWeight="bold" color="teal.700">
          Signup
        </Link>{" "}
      </Text>
      <Stack spacing={10} w="100%" mt="30px">
        <Box>
          <FormLabel color="rgba(0,0,0,0.64)">Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <FormLabel color="rgba(0,0,0,0.64)">Password</FormLabel>
          <FormLabel onClick={changePasswordType}>
            <Link fontSize="14px" color="blue.400">
              Show Password
            </Link>
          </FormLabel>
          <Input
            type={passwordType}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormLabel mt="20px">
            <Link fontSize="14px" color="blue.400">
              Forgot Password
            </Link>
          </FormLabel>
        </Box>
        <Button onClick={handleClick}>Login</Button>
        <Flex align="center" bgColor="#5886d4" borderRadius="5px">
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABg1BMVEX/////QDEAhvkAqkv/vQD///3//v//vAAAh/j/QDIAfPYAqk0Aq0svmPj/QS8Advd7uvuex/sAhPkAp0P/Oyv/uAAAqVD/9/b/oZsAgPj/sav/NyYApkD/urT/9PL/NSL/h33/2dT/cmf/+OL/xQDw+/T/4N3/qaP/7Or/z8v/npb/YVX/W0//aV7/yMT/gHj/Szv/lYz/KhX/0lf/qgD/sQD//PLS8uKz5Mm51/wAozjo+PDB6tYArTwfuW3/v7v/b2X/KAb/U0T/AAD/eXH/Y1v/tLX/6uL/IiT/5pT/aR/+9Nj/zUb/gRr/5J//lAj/Vyj/7Lb/2XH/nQn/XiT/TCr/dhv/gg//yDb/NDb/e1D/8ZHK4f6ewfv/1WBHnfzr9v//3IIAbvpRwWfA3vxirvnAtg7tvAeQtBtu0KJysC5Wrz6K2rOhtBlIv3ui2bXXuwlRofmDsjJkrzBbxo6Z1ssAmIkAjNcAo3QAkMU1wH0AlbEAmhYApF4AmacAnoqBz6AUnUauAAARbUlEQVR4nO1dC2PaVpYWCAlkKXKMZGGMjGzHYOL4gUljHLBp7KbTzaSTadKnZ5Idd7dplta12x1P03o7M/npc865V/gBEhgEwjv6EsAGIt1P533uvYogRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBH+/SDLrZ8EQZIkev3/ACImSTJ/OofEHzecJ4qK0bv6AVCT2KehDCwwIAlgKLcRkVxNvekML8gOeEpyBgGUGS9JuPHWyIlkSqXiwvrc7PLy8gxgeXl27v27C8VS/qL8pAvPNwlyvnh3dmX+8aN7+2VFUWKmaeoxpVzeX11b3NhcXl8oMRlyPR5nnW3pHY6VrA9+La3PbHy4WlbMHMBE6Aj8Ad/Qy/v3FjfnihkySkaRqe54gqhBdAB7o0Hm5zb2dSKmx2LAK3YOEGZMj3GuZvnRclFAcrLLbSxFST4TBUFE88W5xb29CogspgAfoneJo8sUPlLMyt4HqzMLeZklA7I8jvw4cGySkCmtb+5XKiZIihgyKm30Ykg+xqjrTqW8AepKkWVc/SuL34KQKc5ulB3H1BVURNJPJsZ2GaKuohjxAiimE1tcXsjzg4XLpSOYlgpSafmR4uQYGy6hTuKjT3WFPWKoqzHdzJn3VoqSwJ3OuIEEKBVnF3MOWh8OOuZS05lvaWfIv6G4KmvmnLVZcq1h07kIN5LBa2luUXdMxfWWVzXS852LPzm5xdkSHW5sPCpTTnQw6/PlnNnBY/YONEozV95YzwhSK0SGDyqPILqv7OdMVMgO4roWSQiS+yslQRobh8q1dGEtZ6JbdENAnyJEnwt+Nbe2IHDfHD5ImfIzH1R0pVNQ74Mn+NdY5YPZfNjMWgALvPsY47sygPgu8GMkzcp8MTMu2U1+7kPHjHWMCH2ypFzOebSeCdnX8Goiv7yPEd4rsPfHEQ5n5lbnMjzOhsYQg1ZppZwLkBsHJgO6sz+bl0KupySpOG/mlOAUtAXKiXLKTD68NJwF5IXHEAQDcDAdCIJfNs0Z9KghcaRSsLSao9w5cIogQLBEc6YkhBsUS2sVlkAHL0QQYW5vJROuK5UW7lUolQycHtWNpr7Muq2hMZQXFh1evSuBhgpG0UQvQ2l9KIaIF7Y4D06mm37yj+kytL1LTK7aMLUFYiBBIjh6agKFQbyw+RUTSsEuKsqY6TRmlySVx/zXDv0b7Hnourm3nA/Px8jYccrPls2Y0iVQEA1MwXRW5lO3lNjhLx3rENbQMXMrrDkZFkNBysyVHYoS3RgqvFNDPWAnx8F6w6yLql/9J7EYRPpMmA03ZLjwoaPzctAfZFM5xzHL99Y2NjdXVjY3N+cfrZZ1x3FQuJ2UlGww1IYU6OiGo/PGtT9BbBNWKvra5tw6TsXg1FM+T/M0K4v7zp7Z5oapET6TD7X6BQMRlitmjBlXF366s7e3OLtQylwIa6yzmikV39+o7DlX3DG2wFcyAp/BGDVLyZ3YXPjA9GbFBEHtCNMx7y2XfI6YmVuL5dh0DakEqehyiMopU9MQkzWfEK8w54FpV/nxXL5LVzD//kYZ3A53tECwPJMJT0FlzDBkITOTo5a9twyJo6M8nvuI+HkOmLpYpbnH5Rzzq7qSi6GTCcuNSvzP3VXTL5VhH5mVD2eLssCnozoezp3Ll4qz97DPg7loZTnDKuvwABXTfM6np6aTB9Jz+vyCW557iVB2l5xI8sKGCWWYnjNZoA+tA0XNbXmubLbF6csyBAtcnS2xofq6fTbbSKqKzZ6cPpNhczwhMWSrXz56nPPpOunUQ3IW190ekjdDubUUA0nmf7daiWEclCVBCEuG1LeQfxczFV3x8jSY6JjOfPG6liRJmfW1Fb/AMhKgQD5a/A9F98pHWVlQmS9dXwZw8UohVhN8EKBSW08e/N7tE3WiCO7QXOkzoElS2NMxePqnHy9N/0E/IH/JpHYFQLDfytVdyxcqpGeJ5FLij58ckKa289Njlc0+CVLkDHmNAgzgzv3pZDKx9N5nBwqbIzrXVlbNVxbzfNFhH4cPfToNRvA8kUwixQdfgKZSrnxpIZDurBXd+YzrjlWSePwIDxC+t15MJxJIcin55ed8IRBPtemX3P66xNO064sxdAnimJ8uIUPEUuJT0FRd0Xm/VOEdzjzlMWMzQX09wLifcYJJ5Pje7w8UthCGan0wTGeDQvaYrC+4PmDcX01zekn8O/3FwQEvXbGajzn7d3lAu6kyFLaSyZYISVU//fxAibFVXUrMdGbxazeUHUISnj1IXMbSg08oClIa5ywWhdCa8IFAEj6eTrRRhLBBnkYxy7PjsrCgH5DzuLPUxjC5NP3l5wfUETQXi12PMh6JWUcQw+fJ5CV2/PXTz9DXgAgzXY/CmlkDDIMOMAwjYJXsizYREs+l976AuJiDbKYXLR049RzoEnmCYsDW/WQHhmiM01/qSm5F8uuquYMbrFVPDQ55KDLEUT39qjPDJCY4nx/cFTy7ahcPNHgPZngJxfOvkh5CxATnTxlB6r7FZ9DcU2o9BQ649E8SXjIETP+ZFtn7nxz5Td0aGC+HwQ8TmhceDAnTd+ReNFCSXk1OTgyGyakhMbzznz4Mp5eEHkv0qWw8NRDiE6/dRbuBMoR4f9/bDBPT93s8ozSVTccHADL8yxAMEcXz9GM/hs96PdLADFPZlBC8t0ENfO4RLJizeTo6hul0+4bNQEj6MZxeujNChpOHwbMTWB/Rm+HHo2GYIi81OYRwgfnYM19HszUShozj5MvgN2OCGW498WCYTCST0y9GxBCjRWryIZELND2F67X1tZ8Mvx4VQ3xMTgXPEIfmwzA5/aRXlQmGIR0pSC2losWPYfLZiBlKAa+1ocpvPBimkOHtwDd94cH87HD0DIOe6u/OcGR2OCyGpKWeER+ixdcjtcPbQ9lkInnFQ5yKGl08jLd8aeAEt7xzmuTocppzhsFGQ3Jdz/wy7xHlpdwOg5ch+WbP2iKJtcWoqieS4cPAiyeaffatnq5VH/bWrPAWI2cYpJ7SUjqo8b0IgqvpscaXJOzT9KSOKY/vseop4KSUupx37ie9K0Ts00g9nFfqLkPeqEp7yBHexAo4+HiIvbZkojPFJO+1dY1R1C/t3msjIp4MU+nsEG4uxZMaTzuE6uKO0LUhTKuCptJdGMb5c7wDQ/Sk2IkaAkMUEO95d+b54AktFvVXU9SFV/812QMm0h0ZEsWJW2x+JPis5vlXCW+Gb/77sIeON8jwm9u94LWnlgLDn9zrFSg9bJh6zj0lEt/uWjvdTyr1NjUDX3joxRDenbgd/PwTO5zn/GHizf8Yqt3sPnipp6kNVPdXLF50IhjPPgyG1dXTwuNFB2eKyeqP34mWYTSq3V14TzvP4SiHr70Sn1Q8nXrJdjEMoSn8vIMM4a1vv1dVURWto66dBakn9QKGL//CnEonitlbhwHxaUf7Wgzg9+YH21JFURON46o7QM+x9xKpcaHwVIp8aRvDFE09HQbI6cqpL6+noRTnzXcGCFADuEIcMNtASz28zdOCDsEinn01tAVJtCYqmbhUJr7ZJQ0VXSEGYRsyKGnWM/dOx4fiaAiSsDV9xRK/NSxVUzWRUbRPgjiLRLOoca/Ee2Iok9ytc6OanpN8851qWaCeKrADNVVtazsAGaIIJ6iW75C1Qax4fTi0tRhw4GcXDfHHv1qqZZD4QIz4xz6tD34W9DNxzxoxDWY4LIboRJ5e8Kbffm9ZokoMEShIQzwqSD3GhA4n4GuvmBV6MUw9HNrCOGSI67yTzIf+ULMstECNM9SQpGFt9723ld9UGBypT5sjlf3pcHgrhvD0z2l1cDLx4/+KFnFqAc1R1Gz0p/2NwL3vKaSk3gRT6dvDM0Oqju7cJzX98XtyMeBfLnBEhlrtuNAvRbaZD3TUR4SkpEOkKMhbNNf9w/eYxqjoQC+IUUV/Y9Sa9X7tkPY9/eTXxyElHeI6Xd6PgjTGIrPTVFXVLuqphg5VbBb68gVsTdXUROeigvuZieF5UgLuKXny5q8WxAiVMRQvKKnGAodoNPveuSY8ZNbmxTCb+qaXflffoDt+1I9BVBaanNgBmKDaNTcs8nKw+2I3Vp1BJPRrF0PhlB2mnxHca3eiGeQ41U4MCYZ9WmW3ruyxKSazouNwKu7jRpmfGe4WYXb0+rEN+ukhQ3KvqmEfbxeEHtfz8nsrY0WRyvo4GbDCNAXDIVoiv9Qnlqh5C5AUVbMbR3W+o7A7Q3rIL1+nvCsKPicz1dMSz0Eo0nDqp4bmKULGEaKGeLrjmmD3pdFw0L+9nkh7dvLZSiEMFYF3uy8T5Lcb2W4Y6nm61gYV8wDVqDWOqvyydKEIB905tX5+m053bly0GE7x24UPjaHA/6cK6R1YopcZYhAhlpqtHh/VpSvbB9qHJwmFnWbDNoxffk2nvTr5KN0JFOGI9pnWGzXNTbq9REmaap0d1S/pleTeDMMVBTwBP9HQVGP37/8XT7N4n7oqQMxIJ1+ObNufJOz8xrTRhyHBsMVG8zw48peWMaFGbJ9aNtm1KtrGz6mODRpiOPnTSKTHxigIRzUDe0+gj5YfQ0h67BoaZL1w6frTneUL9er2mVqrkWYz37X797csLb1EkRzQROpwhFs3wXTObA3Hr/n5VBY5RKNWUxvNk+2dar1eINTr1Z3tk+aZVavZLJel8ANf3hV/TaWvpG0k0nR8ajjbgTrzQ+Np2Kx88hEglR5I0jBqtmg1GqenzXfv3jWbp2eNBqQFto39D1agqBrW06q4a/3jVvqqCIFi+vUIRUjerHBi2dyj+IOyH3gy2kC5n0blicoDLLza2j/fZq8STGVvfTPKe9FSmlw4Uo1WJ7FHtDyTdu6GVSosNdGtTMCn/vLrpZknmvIeejbTxlAQCk2D7AytsRut9h/P39HEc2WnxogGYQO7+q6u8poi6AWXPaB6ahh40UXNp87oA6q2a/18K8szOJauvRRCuLWSLFXPbNYLFrWu5tgz6JpBgvN2ojX7BEbI/uOSEe+gBsOoNmpqN4/aB0W8ZLv2W8jE02zC8KEcgooKFLYxfbMsCtlBEaQenipaxm//SKVZVfgwzHtE1huYcgUpRBb6Dc2yd//5FgJ9Njvlptsj3+ZPV3bnjAJbcHYosggEPtqwf/k1no3fdvemjvzWLmwyVGYe1dLEgHi23DKoK4SNW6941TvgPvdBaFablsHz0y6RsUfQlWL+ptb42+EoI70HCkdQ/7BLH4jDwRyCpuuMWuOk0NMKlaFTPGkwisEYo0ZpHOi90eAzrmEThBHsnNWMYFRUpAoDKKpG7WyHUQvHAC/yAyUqvPvNVq1ASFIvVrOM2mm91VMOX4iQMkLBaASRn2KdCEZoqzutWYGw73cj8bt71cGnGkGEC2wLWGfUiWTTGaHfWEviy4QK26fAUXQbjapvZ/yS2DSRzxKwWG+IxycFfuXC108E76FBDndyrJGu0rTb5dlFb36UwGiaS9GuNd5Vx4PYVaBbqJ4cGzZv+l8jx6EKjChCDHy30/dE+VDh3p2mfnIGcjR4h7AnevRVixaOGcRvqHMTfYNZI/Z4qydnYI9G9/6GC96Psm0N+bmXagw5CnQ7c+wY1cHn1LBn3EtVhVcCCNZq2tlJlSVpwlBuIzQw+DQEq+MKIMgakewuQVUzar/VGs2dOjtEa9pxLGleROHorCEaYFvU3W9VySqPCSrrdINjgujXrIY92v4A6to8azQsDWmQabo0eU9YVa3GWfOkGkYBHxSkenXnqHl6fNywVJIk8VQtq9E4Pj5tHm1X661weuPgOkVBYlMxR4h3CHjlEzX8i6GOs3+QT7y0a0C6APYGU87u99AaS7gczim1WFB/V5bZvXiZAd5UhpwlOhK5vaeLS2PcsHCTb5sZIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIjw74N/AU5N9d0toZ4VAAAAAElFTkSuQmCC"
            w="50px"
            h="50px"
          />
          <Box ml="150px">
            {" "}
            <Link h="45px" w="100%" fontWeight="bold" color="white">
              Sign in to continue
            </Link>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
