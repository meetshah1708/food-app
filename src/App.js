//import Restaurant from "./Restaurant-app1";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
//import Createuser from './routes/Createuser'
//import ProductData from "./ProductData";
import "./style.css";
import SignUp from "./screens/SignUp";

function App() {
  return (
    <div className="App">
      {/* app1 ka hain code so remove comment when needed  */}
      {/* <Restaurant/> */}


      {/* app2 contents  */}
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            {/* <Route exact path="/createuser" element={<Createuser />}></Route> */}
          </Routes>
        </div>
      </Router>


      {/* app3 contents */}

      {/* <nav className="Topbar">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAACRCAMAAAC4yfDAAAAAzFBMVEUAAAD+/v7////8mAAJCQkNDQ3/nAD/mgBra2vu7u6bm5tZWVn29vbCwsJwcHB6enofHx+NjY1CQkJjY2PKysoqKiowMDBRUVHy8vLm5ubY2Ninp6deXl62traSkpJMTEyAgIDc3Nw7OzskJCSGhoYbGxvQ0NCwsLCioqLqjQBsQQD0kwCYmJhXNACNVQDbhADBdAChYQAmFwDehgC2bgAuHABlPQBOLwB8SwBeOQDMewA8JAAeEgCqZwBGKgCIUgB4SAArGgAgEwASCwBtujg5AAAPDklEQVR4nO2d+X+iPhPHMd6KdqvUgtaj1tvWo5euu9262///f3q4hJmQKFQC38cXn59axJC8mUwmkyASwZJHpWojKyUKqEyj+qjIFEwJ/adUE65nKFNVUjy4Sjfu2v3/q1ZhwlULcVfsMlQveuEqcVfqclSh4bbirtElqYThluKuz2WpA+EmdhuySi7cxN+GrsoBrpoEt+GraMOtxl2RS1TdgjuKux6XqYoJ9zbualymuikdbmK4gqTocHtxV+JSVSVS6kfclbhUZWSpGXcdLlcjKZmcCVNJ6sVdhctVVUoCMWFqSMO4q3C5ykpJXkGgErgClcAVqASuQCVwBSqBK1AJXIFK4ApUAlegErgClcAVqASuQCVwBSqBK1AJXIFK4ApUAleggsPN9qudSatVGtRvAnzrxwNzzePh5vTS/k19UGq1Jp1qPxPggqc0bDQagZZhsjc3QZdtAsJtdBTV2fOf0sZl1kk3tg516ZeaRTklFys9XNbjyDysDI5UutDW3CdkVOX6gXHOsHxErEXCRqeiySmSkrVKp8G6aubQhAOeWuteTRl17QSxqEBwe02T6UHGP1qHLuGH5sB4NFsCHnBRe85pfXA4xVngr41lzwWVOn3WA/38F5ZnZ0ZhhD/37vK8dUpM3ZlXgM/otP3bbwC4VxpsqNNeAMxU/XCSTt5oiozotO2zBviwxnhM66aSYl2PjChjK3tOQl9I4dNvm7gVBl66/5XcJhi3/baI6lpkdleWfMPNVLwtpYBZKjinGXCvqG/ZJ7fow7KnxlWZd0H5Dp14dxyujOA+Mgq1u5irktuEsSR1Zbqufvcj+IWb1fhNIBV4JoLb9bSFdCTziQwPA8qZXXPQmjBQ607BhQW3maXS9oHhFj11VX16Br9w74+1gFzz4HpvCSF9BnL9ON7L2uOz1c8twtYFsNwK71RMF8FtM+qKrOlsuIwr8BoA4V4zvqbXrMk0H2iOtdTxC479w031nTNbR3of9AwAbqvB9CPMGOObcO/oMYAa2siECVdVWXBTHWYbkfGMTlwP7nz17RYKdCvQf2BIBXAnTLOC7T0bLnQK+nDZbo2buGoaCy5jsPe2yj1cdMuoo+ulRuNWu4gvOHBPLh/zICk3FMsUcakyqgm5Z8K9Z3YhePK5cGGwQ5pW932ooKq6971A1cZjduA4PuD2X2C4JGU/3lmFgzZ8dm5YJFi41N7hvAn8/siITmpwfCNXDLiWfTB6Dmsy8z24oGsAXw47DKgZhkuIrN1rzPhYU6kaOxEW8HMgRusDI4JdRf+kBtS/QibuGO4PcHOcZ0bBuAmKLFH3J6WN7nE8RnzFur7gqqwaSFnQzYATQnAJmRi+v0wPYaRZGErZWzR6uw/EATyw/wPTIzI/GoL+GkwhgKcHs7Y2y3QxXDIyuuXNmF3XY/ID94HZdyQJXA6MRhjugQ2m64z2Y6b1t5k3E5ouAT6EUol5fQlGhW4fkfos5LiIgwdCPRXcc758Wa7jzIgMDw+Y3gLCdV3jLXQBwHJklpFOHOeJn6eHXYX3syZoeAPVuuX4lHtwww5lQrhuH8lCt+TrOX9fcPudtnJfNLIZKMMCxnQwwCC4rmu6Zx+usOBK1ValqanGaILmbaAM7rOJKCQouhEb9CmwFSD2dXwbgtth1hVP6TgKkLh56N/iFhVOwYXR1Zh9eMKEayrTqJVxsN48DRf1XQIyaPDGQIdZZ1g0jBZSrnMfCITr0d1JuGCaeM08GVX4pB+DcNnDNXb4wEKHsE/XwDduYNhlO3IIF8zKb9kt4+scuCfdAmzdFfswPLt36oL3p+A+IKcAXSsI1fHAwfL6JYar0NUAA6o4uMNaoddpVdSTcMGEvcoeDeANgpEIUqZRvroutZsuOI5b4E1scMcpou9o3s5eYnenG1kw3MbVpGIONXjSwoHrDgY85ncn4GZvO21rLKVyASy4PXQGGtDhuIXnrk3vJyV2pR6Ewu2ONdYME18MUgSpyG/B7SlerHy4NzAPQC3vwJEeJzfhVFu1lkAhXDD4iYRbaDKbaV2MbbkcuMCgj8AdtmTu9Zhw4USFWoBA9ol/00eBoYEV+UUOtz86mr4OH+6At8xjnewd0B6RU6DulMaFi/y05aYhXPBDgT9EwS3IR1oqAG6Wt2THhdtFToFuvE+4VqkRw8WrLt7c3mm41WBwqVyE94IeuGgKqNJ7TXzCtZIO0cKtonYRufJYrz2g0DUQXHCYAxe5T0K0ce+2MTwa56IUEPH86ieEiwe0E5YLJnli4DZQj9N69uGyMLgtRKp9mFEdmaHV0e0fS7TgfeHGESyfKxyuAq/fdr5SZ1pDCHDh6jDcg8GHm+VOzRhfxXEuDNIY0YJouF3E1j1eDgEuc4YGoyMZJAL4cHG+hpGOhAjxDA1ejBHngg0oQuC2ORULwy2w4KL1nB64IBcuXtlh5VrRKgb65MQMDVxHBNyMymlrVRDcDs/K4KgEJxENtHbJ/E0kMDMmBK0unsgtCIYLDTQFl646guDCjooawVuJQKtmKnPDBnJtyG3IXtOJEG6PZ0hjQXAhQxASo6AFWi7a10NGg171rubZRgsZwkCtAU3avi8RwoXuCo3D7PDmbLhDmQGcKgLO+amtT/Z8Q22OC3AmAbvDhF2oE0ZECJc3nqGeJjsFnQ0XJrfQ6gSKSF1A7J1nhmTFvTfXDIhUoU62Lia4cI8W3nTgxIPhwgXTAbQlzgV0xWLrEC527AcpkE8B6/IAmLPHIR63ALsp3qLlOt2z4aKtMcAPKYii02rutlCbr2Yjg3lbN1iHBu0AixDugGkwWWpPsFOL8wc0uDfSHXyo7aiOlz+yKxtxgJkQZziEQZzLEcIFA6cIuHVkofbiYp9uEynaRZ0PF2VtVHuG5tmMfijlJNzDOAEDWvXW0wowyYwQLlo90ft/odEot7zp3UNfOx8u2qNM5FLtpt9retK7h1mub7jQOZPU+K5fnkC7BdFvhHA9udUUc4stsafh58Ot09eTmTt9bVPzPLJAn+a8TYDKY+JWwKRJlHAHdIck9B/WP4WQ4NLGSDgXbDLgMnahO3AbVECM/oFBZpRwJdbue7PaMDI/5EtCgEvfTecSIzh5K/YRXBurrKoyQgzeg1Hgr3fKcEocKVz6YbJDrbtufENSPacFZ8PlzQvGIP4jTTvkNuEaLLXKY6HbeBgOHxrdwmNFs/nCl4wMeI+2pdDSRaRwPc/kmeVrNTc7SOTwJhG6bhh9hZiTskM+w21d0XSezY4niVvrmA9Log7PfgIL1N5UtHC9dAlRzK9aPY0U3ZR2GHClfpG6oP6v9XHTMlR3u5luoXKLsxW6P1EJzoeUVUbYoVGJtIjhSoUiGCeMaeWBRM/offfoySVXV+zDPdBYcBh2zWwbDEzGnxU7CZsxt6aAlENdgY8YejSoUE9ij3GQoN+aDv2dDqgUWAgZgie4Q95COmg6ZasgIWI8ZYNuY6ZSPGgES3cPK0Pm2QquS7ft/PhASgOmmakQ+axXOvbHKoCnPXqfrmjcO5XCT1Y6h1kPgnsVZK9Yw/gVi8lj7xZXp+H7Ke6AypSNX7EoXReoTl8O8psHLGWrk5FWVIua0uHXPXP+j6gkP8MiUAlcgbpEuG9/nt5n+9n706/f8VbkwuBuFqvlNJ3PWcrPX1afb/HVJjy4i+nHV2iFfUuz1VwHms+nXeV1zrs/cVUoPLjLXG6+CK20wHpbz3OIqwt4GledwoP7ZJjJdBtaeYH0ZaBlkTWUi8szhOhzN/O87u2Ws/BK9K3ZNMcja8CNyy+EOaA9v+hNjAPv2rDavKHcQdD15n5FXSFb4UYLK8OA8rmXiPFOjcBg+rLcva4Xn9v9fr9dfOzmDt7cc7TVcRRyKLY2W6Tj/Ywycnj6nG3+0hf82k9tuvkIq4IUdpw7m5st0oe2dVz24mhjO+J5XBUIfRLxtrSalM+lX5/CLvyonhfL5Sc6YplufhlpNYAEzNA+DkGR7h0WkZnv+yqtj2I5dD9fLLirqOpAS8T013YNlvmu3gVcgdav9dS6ozk0lFpwc+sIasCUkNzCv50bCOne90Ose/i33aXtzpLboU9st/BT6OWPSFDiZjt3o/q8SL6/t7u564Y+0GcZuwKxjayismK/X+F01OD7OvsX9kX+LBybNS4yp8Lrn7l4xzOBKUdqSqpPmea79VNo4e+/2ccLIKub7Yq20EUuXpcrNJ+7TlO5lHzOALw5u+Cv9/WSyoHlpt5Z4c5yuedf77sSmix/W3mSgMb0f7782P/9dpnbj2U6R6XAcmmGeX7NY/YKolciNjtWJjBvmvDH5yYQ4r9Pnx87Mx1OF5d+ZY1ZM8srxJhjFr7M875kp7BNwunp7nW9f/p1dDx//vW0X7/ujNUbVlH5/IqdUnw1T56HPoz6VwRraLMlP49tZAl1YvPpcrd6/Vhs97P3n6beZ/vtYv262i2nc/M+cG/RiudTzSiXis6iVSQLlO9H8DqQYTYWZGU5UK1v5fKv3FytHYjFuQAc0ervn9cjyzDflJF5O4LO9AoxxmFShEvrz4uXY0YYnGx6tz92vS8jwRHf2qSpKPct/AzLfHVf8bI+sXazN7P2UWSN+Ip2U8jXHs5Xv2uzvlIVxgwi1tFMimHHzdd+xdtg4Mdkc7rN+plyPefjnT+YimM7U+bnx8v8aBjAAZuerrY+9yAscun8PMadTKbi2iv2NvtYzk9EWi5WY0a3fN0H2H9gjJ7RrjIxFOdGvK/NVp945e14lgnV/FCfxn1ugk20ZnqR8Q5mhuLf5fi8MSa3L+Y8DM0f5vMXY3K8+U6ue51Lx8/2PwDX1tfz25/Nz/3nYrH43M6eNn/e/p2R+/3axrXLBuo/A/cSdfrlpYm+qazk941/iQKrL/XirsLlqipxXgqb6HyVJOZv8yUKQyPJ31vTEgVXVpZOv1Yk0fdUJRL7NzsTnS9Fh+vvhX+JgqpLDLij0ycmCi7FhMt/31Ci76tALLhykl8IX0UbbuIYwleFHOAyXquQ6CxZbyi1X4zq79XhiXzqkUC4ie2GqcObdZ1X+irJqBaWKoSGS2RfL7hOdEoF93e1XLh60JAkzs9WVwFAIVwd7xX/9fCJTip7pSCcGK7uHJqTq1o2kyigsv2r0kimYP4PMXIWXm/liX0AAAAASUVORK5CYII=" alt="Amazon logo" />
      </nav>

      <div className="MainContainer">
        <div className="ProductPreview">
          <img src="https://imgur.com/iOeUBV7.png" alt="product preview" />

          <div className="FeatureData">
            <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
          </div>
          <div className="HeartBeat">
            <pre>💓</pre>
            <p>78</p>
          </div>
          <div className="ProductData">
          <h1 className="ProductTitle">{ProductData.title}</h1>
          <p className="ProductDescription">{ProductData.description}</p>
          <h3 className="SectionHeading">Select Color </h3>
          </div>

          <div className="ProductPreviewimg">
            <img src="https://imgur.com/iOeUBV7.png" alt="Black  strap" className="ProductImage" />
            <img src="https://imgur.com/PTgQlim.png" alt="Red strap" className="ProductImage" />
            <img src="https://imgur.com/Mplj1YR.png" alt="Blue strap" className="ProductImage" />
            <img src="https://imgur.com/xSIK4M8.png" alt="Purple strap" className="ProductImage" />
          </div>
          <h3 className="SectionHeading">Features </h3>
          <div>
            <button className="FeatureItem">Time</button>
            <button className="FeatureItem">Heart Rate</button>
          </div>
          <button className="PrimaryButton">Buy Now</button>
        </div>
    </div>*/}
    </div>
  );
}

export default App;
